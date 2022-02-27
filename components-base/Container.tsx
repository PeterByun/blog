import { HTMLAttributes } from "react";

export const Container = (
  props: {
    children?: React.ReactNode;
  } & HTMLAttributes<HTMLDivElement>
) => {
  return <div {...props}>{props.children}</div>;
};
