import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import styles from "./PostList.module.css";

const PostList = () => {
  const { postList } = useContext(PostListData);

  return (
    <div className={styles.postList}>
      {postList.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default PostList;
