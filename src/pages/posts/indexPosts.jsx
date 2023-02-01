import style from "../../styles/stylePosts.module.scss";

export default function Posts({ users }) {
  return (
    <div className={style.Posts}>
      <h1 className={style.title}>Explore Posts</h1>
      <div className={style.users}>
        {users && users.map((user) => <h4 key={user.id}>{user.email}</h4>)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const resUsers = await fetch("https://dummyjson.com/users");
  const dataUsers = await resUsers.json();

  return {
    props: {
      users: dataUsers.users,
    },
  };
}
