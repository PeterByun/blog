import { BaseComponentProps } from "../types/component-types";
import { DivAttributes } from "../types/dom-types";

type ContainerProps = BaseComponentProps<DivAttributes>;

export const Container = (props: ContainerProps) => {
  return <div {...props}>{props.children}</div>;
};
