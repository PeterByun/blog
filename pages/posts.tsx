import type { ReactElement } from "react";
import Layout from "../components/Layout";

const Posts = () => {
  return (
    <div>
      <div>Posts!</div>
      {/* 여기엔 블로그 글을 쓸거다. 에디터는 로컬에서 사용하고 번들에 포함하지 않는다. */}
    </div>
  );
};

export default Posts;

Posts.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
