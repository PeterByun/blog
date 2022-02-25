import { HTMLAttributes } from "react";

import Link from "next/link";

const Nav = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
  );
};

export default Nav;
