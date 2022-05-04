import { HTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import ResumeIconActive from "../public/icons/resume-active.png";
import ResumeIconInactive from "../public/icons/resume-inactive.png";

import HomeIconInactive from "../public/icons/home-inactive.png";
import HomeIconActive from "../public/icons/home-active.png";

import PostsIconInactive from "../public/icons/posts-inactive.png";
import PostsIconActive from "../public/icons/posts-active.png";

const routes = {
  resume: "/resume",
  home: "/",
  posts: "/posts",
};

const getIsLinkActiveWithP = (routerPathName: string) => (pathName: string) => {
  return routerPathName === pathName;
};

type LinkWrapperProps = {
  name: string;
  label: string;
  href: string;
  isLinkActive: boolean;
  IconActive: StaticImageData;
  IconInactive: StaticImageData;
};

const LinkWrapper = (props: LinkWrapperProps) => {
  const { name, label, href, isLinkActive, IconActive, IconInactive } = props;
  const linkWrapperClass = isLinkActive
    ? "link-wrapper active"
    : "link-wrapper";
  return (
    <Link href={href}>
      <span className={linkWrapperClass}>
        <Image
          className="link-img"
          alt={name}
          src={isLinkActive ? IconActive : IconInactive}
        />
        {label}
      </span>
    </Link>
  );
};

const Nav = (props: {} & HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter();

  const getIsLinkActive = getIsLinkActiveWithP(router.pathname);

  return (
    <nav {...props} className="nav-root">
      <LinkWrapper
        href={routes.resume}
        name="resume"
        label="경력"
        isLinkActive={getIsLinkActive(routes.resume)}
        IconActive={ResumeIconActive}
        IconInactive={ResumeIconInactive}
      />

      <LinkWrapper
        href={routes.home}
        name="home"
        label="소개"
        isLinkActive={getIsLinkActive(routes.home)}
        IconActive={HomeIconActive}
        IconInactive={HomeIconInactive}
      />

      <LinkWrapper
        href={routes.posts}
        name="posts"
        label="게시글"
        isLinkActive={getIsLinkActive(routes.posts)}
        IconActive={PostsIconActive}
        IconInactive={PostsIconInactive}
      />
    </nav>
  );
};

export default Nav;
