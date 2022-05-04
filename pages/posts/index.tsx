import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";

import Layout from "../../components/Layout";
import { H } from "../../components-base/H";
import { Container } from "../../components-base/Container";
import { LoadingSpinner } from "../../components/LoadingSpinner";

type Post = {
  blockId: string;
  title: string;
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BLOG_API_URL}/posts`)
      .then<Post[]>((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <section className="posts-root">
      <H level={1}>게시글</H>
      {posts.length ? (
        posts.map((post) => {
          return (
            <Container
              role="button"
              className="posts-item container-2 margin-bottom-1"
              key={post.blockId}
            >
              <Link href={`/posts/${post.blockId}?postTitle=${post.title}`}>
                <h3>{post.title}</h3>
              </Link>
            </Container>
          );
        })
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default Posts;

Posts.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
