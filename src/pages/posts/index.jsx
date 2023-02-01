import style from "../../styles/stylePosts.module.scss";

export default function Posts({ posts }) {
  console.log(posts);
  return (
    <div className={style.Posts}>
      <h1 className={style.title}>Explore Posts</h1>
      <div className={style.posts}>
        {posts &&
          posts.map((post) => (
            <div className={style.postCard}>
              <h3 key={post.id}>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const resPosts = await fetch("https://dummyjson.com/posts");
  const dataPosts = await resPosts.json();

  return {
    props: {
      posts: dataPosts.posts,
    },
  };
}
