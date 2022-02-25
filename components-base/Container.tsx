import { HTMLAttributes } from "react";

export const Container = (props: HTMLAttributes<HTMLDivElement>) => {
  return <Container {...props}>{props.children}</Container>;
};
