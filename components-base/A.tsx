import React from "react";
import { BaseComponentProps } from "../types/component-types";
import { AnchorAttributes } from "../types/dom-types";

type AnchorProps = BaseComponentProps<AnchorAttributes>;

export const A = (props: AnchorProps) => {
  const { children, href } = props;

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};
