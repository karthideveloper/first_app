function PostList({ res }) {
  return (
    <>
      <h1>PostList</h1>
      {console.log(res)}
      {res.map((re) => {
        return (
          <div key={re.id}>
            <h2>
              {re.id}{' '}
              {re.title}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();
  return {
    props: {
      res: data.slice(0, 3),
    },
  };
}
