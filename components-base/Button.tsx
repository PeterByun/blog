import { ButtonHTMLAttributes } from "react";

export const Button = ({
  forwardProps,
}: {
  forwardProps: ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return <button {...forwardProps}>{forwardProps.children}</button>;
};
