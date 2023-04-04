import { useRouter } from "next/router";

function ReviewDetails() {
  const router = useRouter();
  const { postId, reviewId } = router.query;

  return (
    <h1>
      Post Details {postId} ReviewDetails {reviewId}
    </h1>
  );
}
export default ReviewDetails;
