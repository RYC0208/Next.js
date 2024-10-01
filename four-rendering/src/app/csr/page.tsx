"use client";

import { useEffect, useState } from "react";
import { Post } from "../page";

const fetchData = async () => {
  const res = await fetch("http://localhost:4000/posts");
  const data: Post[] = await res.json();

  return data;
};

const CsrPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetchData().then(setPosts);
    console.log("CSR!");
  }, []);

  return (
    <div>
      <h1>SSR</h1>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <p>{JSON.stringify(post)}</p>
        </div>
      ))}
    </div>
  );
};

export default CsrPage;
