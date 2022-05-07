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

class StorageWithExpiration {
  storage: Storage;

  constructor(storageType: "local" | "session") {
    this.storage =
      storageType === "local" ? window.localStorage : window.sessionStorage;
  }

  setItem(key: string, value: string): void {
    const storageItem = {
      createdAt: new Date().toUTCString(),
      value: value,
    };
    this.storage.setItem(key, JSON.stringify(storageItem));
  }

  getItem(key: string) {
    const storageItem = this.storage.getItem(key);
    if (!storageItem) return storageItem;

    const parsedStorageItem = JSON.parse(storageItem);
    // TODO: calculate the expiration date
    if (new Date() > new Date(parsedStorageItem.createdAt)) {
      return undefined;
    } else {
      return parsedStorageItem.value;
    }
  }
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BLOG_API_URL}/posts`)
      .then<Post[]>((response) => response.json())
      .then((data) => {
        setPosts(data);

        new CustomStorage("local").setItem(data, new Date());
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
