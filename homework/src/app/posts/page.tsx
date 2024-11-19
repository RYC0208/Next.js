import {QueryClient} from "@tanstack/react-query";

import { getPosts } from "@/api/posts";
import PostsClient from "./PostsClient";

export default async function Posts() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <div>
      <PostsClient />
    </div>
  );
}
