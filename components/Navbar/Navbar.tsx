import Image from 'next/image';
import { StyledNavbar, LeftCol, RightCol } from './Navbar.style';
import { NavbarType } from './Navbar.type';

const Navbar: React.FC<NavbarType> = ({ logo, children }) => (
  <StyledNavbar>
    <LeftCol>
      <Image src={logo.url} alt={logo.alt} height="55px" width="132px" />
    </LeftCol>
    <RightCol>{children}</RightCol>
  </StyledNavbar>
);

export default Navbar;
