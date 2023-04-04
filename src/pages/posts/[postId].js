function PostData() {
  return (
    <>
      <h1>Post Datass</h1>
    </>
  );
}
export default PostData;

export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const res = await result.json();
  return {
    props: {
      data: res,
    },
  };
}
