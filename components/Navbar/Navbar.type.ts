export type NavbarType = {
  logo: {
    url: string;
    alt: string;
  };
  links: NavLinkType;
};

type NavLinkType = {
  url: string;
  label: string;
  children?: NavLinkType;
}[];
