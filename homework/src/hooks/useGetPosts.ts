"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/api/posts";

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};
