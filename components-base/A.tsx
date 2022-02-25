import { AnchorHTMLAttributes } from "react";

export const A = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a href="" {...props}>
      {props.children}
    </a>
  );
};
