import Image from 'next/image';
import { StyledNavbar, LeftCol, RightCol } from './Navbar.style';
import { NavbarType } from './Navbar.type';

const Navbar: React.FC<NavbarType> = ({ logo, links }) => (
  <StyledNavbar>
    <LeftCol>
      <Image src={logo.url} alt={logo.alt} height="55px" width="132px" />
    </LeftCol>
    <RightCol>
      <span>Listings</span>
      <span>Company</span>
      <span>Selling</span>
      <span>News</span>
      <button>Login</button>
    </RightCol>
  </StyledNavbar>
);

export default Navbar;
