import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { H } from "../../components-base/H";

class InnerHtmlHolder {
  __html: string;
  constructor(__html: string) {
    this.__html = __html;
  }
}

export default function Post() {
  const router = useRouter();
  const { postId, postTitle } = router.query;

  const [postContent, setPostContent] = useState<InnerHtmlHolder>(
    new InnerHtmlHolder("")
  );

  useEffect(() => {
    if (router.isReady) {
      fetch(`${process.env.NEXT_PUBLIC_BLOG_API_URL}/posts/${postId}`)
        .then<string>((response) => response.text())
        .then((data) => {
          setPostContent(new InnerHtmlHolder(data));
        });
    }
  }, [router.isReady]);

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <section className="post-root">
      <header className="header">
        <div>
          <button className="button-back" onClick={handleBackClick}></button>
        </div>
        <div>
          <H level={2}>게시글</H>
        </div>
        <div></div>
      </header>

      <article className="post">
        <H level={1} className="post-title">
          {postTitle}
        </H>
        <p dangerouslySetInnerHTML={postContent} className="post-content"></p>
      </article>
    </section>
  );
}
