import { Post } from "../page";

export default async function SsgPage() {
  const res = await fetch("http://localhost:4000/posts");
  const posts: Post[] = await res.json();

  console.log("SSG!");

  return (
    <div>
      <h1>SSG</h1>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <p>{JSON.stringify(post)}</p>
        </div>
      ))}
    </div>
  );
}
