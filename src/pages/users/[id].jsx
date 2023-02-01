import { useRouter } from "next/router";

const UserCard = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(router);

  return <h1>Pagina dinamica di Users: {id}</h1>;
};

export default UserCard;
