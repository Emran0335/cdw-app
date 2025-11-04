import { routes } from "./routes";

export const imagesSources = {
  classifiedPlaceholder:
    "https://car-dealer-website.s3.eu-west-1.amazonaws.com/next-s3-uploads/stock/classified-placeholder.jpeg",
};

export const navLinks = [
  {
    id: 1,
    href: routes.home,
    label: "Home",
  },
  {
    id: 2,
    href: routes.inventory,
    label: "Inventory",
  },
];

export const CLASSIFIEDS_PER_PAGE = 3;