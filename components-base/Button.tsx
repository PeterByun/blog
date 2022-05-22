import { BaseComponentProps } from "../types/component-types";
import { ButtonAttributes } from "../types/dom-types";

type ButtonProps = BaseComponentProps<ButtonAttributes>;

export const Button = (props: ButtonProps) => {
  return <button {...props}>{props.children}</button>;
};
