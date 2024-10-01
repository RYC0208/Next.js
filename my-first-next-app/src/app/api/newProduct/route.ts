import { Product } from "@/app/page";

export async function GET(request: Request) {
  const res = await fetch("http://localhost:4000/products", {
    headers: {
      "Context-Type": "application/json",
    },
  });
  const data: Product[] = await res.json();
  const NewData = data.filter((p) => p.isNew);
  return Response.json({ NewData });
}
