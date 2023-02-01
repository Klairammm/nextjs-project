import { useRouter } from "next/router";

const PostCard = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(router);

  return <h1>Pagina dinamica di Posts: {id}</h1>;
};

export default PostCard;
