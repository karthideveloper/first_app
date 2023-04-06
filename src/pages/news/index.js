function NewsList({ article }) {
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
export default NewsList;

export async function getServerSideProps() {
  const result = await fetch("http://localhost:4000/news");
  const res = await result.json();
  return {
    props: {
      article: res,
    },
  };
}
