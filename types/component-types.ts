import { ReactElement, ReactNode, HTMLAttributes } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type BaseComponentProps<A extends HTMLAttributes<HTMLElement>> = {
  children?: React.ReactNode;
} & A;

// Next.js page types
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
