import { useRouter } from "next/router";

function PostDetails() {
    const router=useRouter()

  return <h1>PostDetails{router.query.postId}</h1>;
}
export default PostDetails;
