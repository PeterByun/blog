import { HTMLAttributes, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ResumeIconActive = "/assets/icons/resume-active.png";
const ResumeIconInactive = "/assets/icons/resume-inactive.png";

const PostsIconInactive = "/assets/icons/posts-inactive.png";
const PostsIconActive = "/assets/icons/posts-active.png";

const routes = {
  home: "/",
  posts: "/posts",
  profile: "/profile",
} as const;

type LinkWrapperProps = {
  name: string;
  label: string;
  href: string;
  isLinkActive: boolean;
  IconActive: string;
  IconInactive: string;
};

const LinkWrapper = (props: LinkWrapperProps) => {
  const { name, label, href, isLinkActive, IconActive, IconInactive } = props;

  const linkWrapperClass = useMemo(() => {
    return isLinkActive ? "link-wrapper active" : "link-wrapper";
  }, [isLinkActive]);

  return (
    <Link href={href}>
      <span className={linkWrapperClass}>
        <img
          className="link-img"
          alt={name}
          src={isLinkActive ? IconActive : IconInactive}
        />
        {label}
      </span>
    </Link>
  );
};

const getIsLinkActiveWithRouterPathName =
  (routerPathName: string) => (pathName: string) => {
    return routerPathName === pathName;
  };

const Nav = (props: HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter();

  const getIsLinkActive = getIsLinkActiveWithRouterPathName(router.pathname);
  const isPostsActive = useMemo(() => {
    return getIsLinkActive(routes.posts) || getIsLinkActive(routes.home);
  }, [router.pathname]);

  return (
    <nav {...props} className="nav-root">
      <LinkWrapper
        href={routes.posts}
        name="posts"
        label="게시글"
        isLinkActive={isPostsActive}
        IconActive={PostsIconActive}
        IconInactive={PostsIconInactive}
      />

      <LinkWrapper
        href={routes.profile}
        name="profile"
        label="프로필"
        isLinkActive={getIsLinkActive(routes.profile)}
        IconActive={ResumeIconActive}
        IconInactive={ResumeIconInactive}
      />
    </nav>
  );
};

export default Nav;
