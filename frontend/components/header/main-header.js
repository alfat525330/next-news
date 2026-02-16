import Link from 'next/link';
import NavLink from '../nav-link';
import logo from '@/assets/logo.png'
import LogoutButton from './LogoutButton';

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">
          <img src={logo.src} alt="A newspaper" />
        </Link>
        
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
          <li>
            <LogoutButton/>
          </li>
        </ul>
      </nav>
    </header>
  );
}
