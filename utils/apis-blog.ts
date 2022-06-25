import { Post } from "../types/api-blog-types";
import { fetchJson } from "./fetch-utils";

export const getPosts = () => {
  return fetchJson<Post[]>(`${process.env.NEXT_PUBLIC_BLOG_API_URL}/posts`);
};
