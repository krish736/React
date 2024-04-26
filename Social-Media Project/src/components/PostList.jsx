import Post from "./Post";
import styles from "./PostList.module.css";
const PostList = () => {
  return (
    <div className={styles.postList}>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostList;
