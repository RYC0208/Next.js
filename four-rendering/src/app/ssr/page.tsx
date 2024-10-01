import { Post } from "../page";

export default async function SsrPage() {
  const res = await fetch("http://localhost:4000/posts", {
    cache: "no-store",
  });
  const posts: Post[] = await res.json();
  console.log("SSR!");

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
}
