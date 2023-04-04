import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  console.log(router);
  const { params } = router.query;
  return (
    <>
      {params?.map((li, i) => {
        return <h1 key={i}>{li}</h1>;
      })}
      <h1>Docs Section</h1>
    </>
  );
}
export default Docs;
