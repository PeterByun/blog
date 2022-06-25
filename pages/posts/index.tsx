import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { getPosts } from "../../utils/apis-blog";
import { useQuery } from "react-query";

import { NextPageWithLayout } from "../../types/component-types";

import Layout from "../../components/Layout";
import { H } from "../../components-base/H";
import { Container } from "../../components-base/Container";
import { LoadingSpinner } from "../../components/LoadingSpinner";

const Posts: NextPageWithLayout = () => {
  const { data: posts } = useQuery("todos", getPosts);

  return (
    <section className="posts-root">
      <H level={1}>게시글</H>
      {posts?.length ? (
        posts.map((post) => {
          return (
            <Container
              key={post.blockId}
              role="button"
              className="posts-item container-2 margin-bottom-1"
            >
              <Link href={`/posts/${post.blockId}?postTitle=${post.title}`}>
                <h3>{post.title}</h3>
              </Link>
            </Container>
          );
        })
      ) : (
        <LoadingSpinner size="sm" />
      )}
    </section>
  );
};

Posts.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Posts;
