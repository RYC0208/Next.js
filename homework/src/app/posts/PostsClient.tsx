"use client";

import { useGetPosts } from "@/hooks/useGetPosts";

export default function PostsClient() {
  const { data } = useGetPosts();

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
