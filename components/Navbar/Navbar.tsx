import Image from 'next/image';
import Link from 'next/link';
import { StyledNavbar, LeftCol, RightCol } from './Navbar.style';
import { NavbarType } from './Navbar.type';

const Navbar: React.FC<NavbarType> = ({ children }) => (
  <StyledNavbar>
    <LeftCol>
      <Link href="/">
        <a>
          <Image
            src={'/cc-logo-r.svg'}
            alt="Collecting Cars logo"
            height="55px"
            width="132px"
          />
        </a>
      </Link>
    </LeftCol>
    <RightCol>{children}</RightCol>
  </StyledNavbar>
);

export default Navbar;
