import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "../styles/globals.scss";

import "../styles/pages/index.scss";
import "../styles/pages/resume.scss";
import "../styles/pages/posts.scss";
import "../styles/pages/post.scss";

import "../styles/components/header.scss";
import "../styles/components/nav.scss";
import "../styles/components/container.scss";
import "../styles/components/canvas-contact.scss";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
