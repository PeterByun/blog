import "../styles/globals.scss";
import "../styles/utility-classes.scss";

import "../styles/pages/profile.scss";
import "../styles/pages/posts.scss";
import "../styles/pages/post.scss";

import "../styles/components/header.scss";
import "../styles/components/nav.scss";
import "../styles/components/container.scss";
import "../styles/components/canvas-contact.scss";

import { QueryClient, QueryClientProvider } from "react-query";
import { AppPropsWithLayout } from "../types/component-types";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const queryClient = new QueryClient();

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
