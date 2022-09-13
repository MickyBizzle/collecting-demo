import Image from 'next/image';
import { StyledNavbar, LeftCol, RightCol } from './Navbar.style';
import { NavbarType } from './Navbar.type';

const Navbar: React.FC<NavbarType> = ({ children }) => (
  <StyledNavbar>
    <LeftCol>
      <Image
        src={'/cc-logo-r.svg'}
        alt="Collecting Cars logo"
        height="55px"
        width="132px"
      />
    </LeftCol>
    <RightCol>{children}</RightCol>
  </StyledNavbar>
);

export default Navbar;
