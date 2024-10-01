import { Post } from "../page";

export default async function IsrPage() {
  const res = await fetch("http://localhost:4000/posts", {
    next: {
      revalidate: 3,
    },
  });
  const posts: Post[] = await res.json();

  console.log("ISR!");

  return (
    <div>
      <h1>ISR</h1>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <p>{JSON.stringify(post)}</p>
        </div>
      ))}
    </div>
  );
}
