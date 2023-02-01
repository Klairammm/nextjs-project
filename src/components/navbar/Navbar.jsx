import style from "./styleNavbar.module.scss";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/posts">POSTS</Link>
        </li>
        <li>
          <Link href="/users">USERS</Link>
        </li>
        <li>
          <Link href="/contacts">CONTACT US</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
