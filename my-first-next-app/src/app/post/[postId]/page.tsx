type Props = {
  params: {
    postId: number;
  };
};

const PostDetailPage = ({ params }: Props) => {
  return <>{params.postId} Page</>;
};

export default PostDetailPage;
