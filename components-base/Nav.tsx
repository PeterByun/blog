import { HTMLAttributes } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const routes = {
  resume: "/resume",
  home: "/",
  posts: "/posts",
};

const getLinkClassByCurrentPath =
  (routerPathName: string) => (pathName: string) => {
    return routerPathName === pathName ? "active" : "";
  };

const Nav = (props: {} & HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter();

  const getLinkClass = getLinkClassByCurrentPath(router.pathname);

  return (
    <nav {...props} className="nav-root">
      <Link href={routes.resume}>
        <a className={getLinkClass(routes.resume)}>이력서</a>
      </Link>
      <Link href={routes.home}>
        <a className={getLinkClass(routes.home)}>처음으로</a>
      </Link>
      <Link href={routes.posts}>
        <a className={getLinkClass(routes.posts)}>게시글</a>
      </Link>
    </nav>
  );
};

export default Nav;
