import style from "../../styles/styleUsers.module.scss";

export default function Users({ users }) {
  console.log(users);
  return (
    <div className={style.Users}>
      <h1 className={style.title}>Meet our Users!</h1>
      <div className={style.users}>
        {users &&
          users.map((user) => (
            <div className={style.userCard}>
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <div className={style.mainInfo}>
                <h3 key={user.id}>{`${user.firstName} ${user.lastName}`}</h3>
                <p>{user.email}</p>
              </div>
              <div className={style.secondaryInfo}>
                <p>{user.address.city}</p>
              </div>
            </div>
          ))}
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

//SERVER SIDE RENDERING

// export async function getServerSideProps() {
//   const resUsers = await fetch("https://dummyjson.com/users");
//   const dataUsers = await resUsers.json();

//   return {
//     props: {
//       users: dataUsers.users,
//     },
//   };
// }
