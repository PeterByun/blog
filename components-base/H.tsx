import { HTMLAttributes } from "react";

export const H = (
  props: {
    level: number;
  } & HTMLAttributes<HTMLHeadingElement>
) => {
  return (
    <>
      {props.level === 1 ? (
        <h1 {...props}>{props.children}</h1>
      ) : props.level === 2 ? (
        <h2 {...props}>{props.children}</h2>
      ) : (
        <h3 {...props}>{props.children}</h3>
      )}
    </>
  );
};
