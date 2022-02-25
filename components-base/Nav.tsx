import { HTMLAttributes } from "react";

import Link from "next/link";

const Nav = ({
  forwardProps,
}: {
  forwardProps?: HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <nav {...forwardProps}>
      <Link href="/resume">
        <a>Resume</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </nav>
  );
};

export default Nav;
