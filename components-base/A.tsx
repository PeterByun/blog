import { AnchorHTMLAttributes } from "react";

export const A = ({
  forwardProps,
}: {
  forwardProps: AnchorHTMLAttributes<HTMLAnchorElement>;
}) => {
  return (
    <a href="" {...forwardProps}>
      {forwardProps.children}
    </a>
  );
};
