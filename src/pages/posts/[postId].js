import { useRouter } from "next/router";
function PostData({ data }) {
  const router=useRouter();

  if(router.isFallback){
    return<h1>jdshcsd</h1>
  }
  return (
    <>
      <h1>Post Datass</h1>
      {data.id}
      {data.title}
    </>
  );
}
export default PostData;

export async function getStaticPaths() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();
  const paths=data.map((d)=>{
    return{
      params:{
        postId:`${d.id}`
      }
    }
  })
  return {
    paths: [
      {
        params: {
          postId: "1",
        },
        params: {
          postId: "2",
        },
        params: {
          postId: "3",
        },
      },
    ],
    fallback:true,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const res = await result.json();
  if(!res.id){
    return{
      notFound: true,
    }
  }
  return {
    props: {
      data: res,
    },
  };
}
