import { HTMLAttributes } from "react";

export const P = (props: {} & HTMLAttributes<HTMLParagraphElement>) => {
  return <p {...props}>{props.children}</p>;
};
