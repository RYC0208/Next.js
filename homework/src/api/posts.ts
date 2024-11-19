export interface Post {
  id: number;
  title: string;
  body: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch("");
  if (!response.ok) {
    throw new Error("error");
  }
  return response.json();
};
