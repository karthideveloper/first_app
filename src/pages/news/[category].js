function NewsListCategory({ article }) {
  return (
    <>
      <h1>News List Data</h1>
      {article.map((d) => {
        return (
          <div key={d.id}>
            <h2>{d.title}</h2>
            <h2>{d.category}</h2>
          </div>
        );
      })}
    </>
  );
}
export default NewsListCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const result = await fetch(`http://localhost:4000/news?category=${category}`);
  const res = await result.json();
  return {
    props: {
      article: res,
    },
  };
}
