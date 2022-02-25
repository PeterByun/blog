import { HTMLAttributes } from "react";

export const P = ({
  forwardProps,
}: {
  forwardProps: HTMLAttributes<HTMLParagraphElement>;
}) => {
  return <p {...forwardProps}>{forwardProps.children}</p>;
};
