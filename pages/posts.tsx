import styles from "../styles/index.module.scss";

import type { ReactElement } from "react";
import Layout from "../components/Layout";

const Posts = () => {
  return (
    <div className={styles.container}>
      <div>Posts!</div>
    </div>
  );
};

export default Posts;

Posts.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
