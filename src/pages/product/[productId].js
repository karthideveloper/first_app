import { useRouter } from "next/router";

function ProductDetails({ data }) {
  const router = useRouter();
  console.log(router);

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <h1>
      ProductDetails {data.id}
      {data.title}
      {data.price}
      {data.description}
    </h1>
  );
}
export default ProductDetails;

export async function getStaticProps(context) {
  const { params } = context;
  const result = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await result.json();
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          productId: "1",
        },
      },
    ],
    fallback: true,
  };
}
