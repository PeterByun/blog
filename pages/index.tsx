import Layout from "../components/Layout";
import Posts from "./posts";

export default Posts;

Posts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
