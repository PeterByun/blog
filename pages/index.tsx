import styles from "../styles/index.module.scss";

import type { ReactElement } from "react";
import Layout from "../components/Layout";

export default function Page() {
  return (
    <div className={styles.container}>
      <div>Home!</div>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
