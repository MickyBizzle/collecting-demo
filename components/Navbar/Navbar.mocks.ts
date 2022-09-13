import { NavButtons } from './stories/NavButtons';
import { NavbarType } from './Navbar.type';

const justLogo: NavbarType = {
  logo: {
    url: 'https://collectingcars.com/assets/img/cc-logo-r.svg',
    alt: 'Collecting Cars logo',
  },
};

const withButtons: NavbarType = {
  logo: {
    url: 'https://collectingcars.com/assets/img/cc-logo-r.svg',
    alt: 'Collecting Cars logo',
  },
  children: NavButtons(),
};

export const mockNavbarProps = {
  justLogo,
  withButtons,
};
