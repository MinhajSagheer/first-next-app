// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
    const mainStyles = {
        padding: '20px',
      };
  return (
    <nav  style={mainStyles}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
