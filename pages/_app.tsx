import "../styles/globals.scss";
import "../styles/utility-classes.scss";

import "../styles/pages/profile.scss";
import "../styles/pages/posts.scss";
import "../styles/pages/post.scss";

import "../styles/components/header.scss";
import "../styles/components/nav.scss";
import "../styles/components/container.scss";
import "../styles/components/canvas-contact.scss";

import { AppPropsWithLayout } from "../types/component-types";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
