import type { ReactElement } from "react";
import Layout from "../components/Layout";
import styles from "../styles/index.module.scss";

const Resume = () => {
  return (
    <div className={styles.container}>
      <div>Resume!</div>
    </div>
  );
};

export default Resume;

Resume.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
