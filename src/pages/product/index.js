import Link from "next/link";

function Product({ pData }) {
  return (
    <>
      <h1>Product Page</h1>
      {pData.map((data) => {
        return (
          <h2 key={data.id}>
            {data.id}
            {data.title}
            {data.price}
            {data.description}
            <br />
          </h2>
        );
      })}
    </>
  );
}
export default Product;

export async function getStaticProps() {
  const result = await fetch("http://localhost:4000/products");
  const data = await result.json();
  return {
    props: {
      pData: data,
    },
    revalidate: 5,
  };
}
