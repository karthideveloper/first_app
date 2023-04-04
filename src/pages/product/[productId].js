import { useRouter } from "next/router";

function ProductDetails() {
    const router=useRouter()
    console.log(router)

  return <h1>ProductDetails{router.query.productId}</h1>;
}
export default ProductDetails;
