import { HTMLAttributes } from "react";

export const Span = (props: {} & HTMLAttributes<HTMLSpanElement>) => {
  return <span {...props}>{props.children}</span>;
};
