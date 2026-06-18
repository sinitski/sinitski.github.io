const allTrackableLinks = document.querySelectorAll("a[data-track]");

const trackEvent = (name, href) => {
  const payload = {
    event: "portfolio_click",
    name,
    href,
    at: new Date().toISOString(),
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", "portfolio_click", {
      link_name: name,
      link_url: href,
    });
  }

  if (typeof window.plausible === "function") {
    window.plausible("portfolio_click", { props: { link_name: name, link_url: href } });
  }
};

allTrackableLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trackEvent(link.dataset.track || "unknown_link", link.href);
  });
});

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
