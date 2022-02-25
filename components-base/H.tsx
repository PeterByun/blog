import { HTMLAttributes } from "react";

export const H = ({
  level,
  forwardProps,
}: {
  level: number;
  forwardProps: HTMLAttributes<HTMLHeadingElement>;
}) => {
  return (
    <>
      {level === 1 ? (
        <h1 {...forwardProps}>{forwardProps.children}</h1>
      ) : level === 2 ? (
        <h2 {...forwardProps}>{forwardProps.children}</h2>
      ) : (
        <h3 {...forwardProps}>{forwardProps.children}</h3>
      )}
    </>
  );
};
