import { NavButtons } from './stories/NavButtons';
import { NavbarType } from './Navbar.type';

const justLogo: NavbarType = {};

const withButtons: NavbarType = {
  children: NavButtons(),
};

export const mockNavbarProps = {
  justLogo,
  withButtons,
};
