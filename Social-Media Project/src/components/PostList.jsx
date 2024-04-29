import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import styles from "./PostList.module.css";
import NoPost from "./Nopost";
import LoadingSpinner from "./LoadingSpinner";


const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFeching] = useState(false)

  // useEffect(() => {
  //   setFeching(true)

  //   const controller = new AbortController()
  //   const signal = controller.signal
  //   fetch("https://dummyjson.com/posts" , {signal})
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFeching(false)
  //     });

  //     return () =>{
  //       console.log("useEffect Clean UP");
  //       // controller.abort();
  //     }
  // }, []);

  // const handleInitaliseButton = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // };

  return (

    <div className={styles.postList}>
      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && (
        <NoPost  />
      )}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
