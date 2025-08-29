export const generateSlug = (title, slug, modelName) => {
  let cardSlug;
  let cardBreadscumb;
  switch (modelName) {
    case "about-us":
      cardSlug = "/about";
      cardBreadscumb = [
        {
          slug: "/about",
          label: title,
        },
      ];
      break;
    case "blog-landing":
      cardSlug = "/article";
      cardBreadscumb = [
        {
          slug: "/article",
          label: title,
        },
      ];
      break;
    case "career-landing":
      cardSlug = "/career";
      cardBreadscumb = [
        {
          slug: "/career",
          label: title,
        },
      ];
      break;
    case "career":
      cardSlug = `/career/${slug}.html`;
      cardBreadscumb = [
        {
          slug: `/career`,
          label: "Careers",
        },
        {
          slug: `/career/${slug}.html`,
          label: title,
        },
      ];
      break;
    case "turnkey-smart-remote":
      cardSlug = "/technology-redefined/batteryless-remote";
      cardBreadscumb = [
        {
          slug: "/technology-redefined",
          label: "Turnkey Projects",
        },
        {
          slug: "/technology-redefined/batteryless-remote",
          label: title,
        },
      ];
      break;
    case "product":
      cardSlug = `/products/${slug}.html`;
      cardBreadscumb = [
        {
          slug: "/products",
          label: "Products",
        },
        {
          slug: `/products/${slug}.html`,
          label: title,
        },
      ];
      break;
    case "product-landing":
      cardSlug = `/products`;
      cardBreadscumb = [
        {
          slug: `/products/`,
          label: title,
        },
      ];
      break;
    case "investor":
      cardSlug = `/investors`;
      cardBreadscumb = [
        {
          slug: "/investors",
          label: title,
        },
      ];
      break;
    case "news-landing":
      cardSlug = `/news`;
      cardBreadscumb = [
        {
          slug: "/news",
          label: title,
        },
      ];
      break;
    case "writer":
      cardSlug = `/team-member/${slug}.html`;
      cardBreadscumb = [
        {
          slug: `/team-member/${slug}.html`,
          label: title,
        },
      ];
      break;
    case "turnkey-project-landing":
      cardSlug = `/technology-redefined`;
      cardBreadscumb = [
        {
          slug: `/technology-redefined`,
          label: title,
        },
      ];
      break;
    case "privacy-settings":
      cardSlug = `/privacy-settings`;
      cardBreadscumb = [
        {
          slug: `/privacy-settings`,
          label: title,
        },
      ];
      break;
    case "privacy-policy":
      cardSlug = `/privacy-policy`;
      cardBreadscumb = [
        {
          slug: `/privacy-policy`,
          label: title,
        },
      ];
      break;

    default:
      cardSlug = `/`;
      cardBreadscumb = [
        {
          slug: "/",
          label: "ONIO",
        },
      ];
      break;
  }
  return {
    cardSlug,
    cardBreadscumb,
  };
};
