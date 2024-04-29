import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    console.log("dispatched");
    newPostList = [action.payload, ...currPostList];
  } 
  else if (action.type === "ADD_Initial_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    // DEFAULT_POST_LIST
    []
  );
  const addPost = (post) => {
    console.log("add post called");
    dispatchPostList({
      type: "ADD_POST",
      payload: 
        post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_Initial_POST",
      payload: {
        posts: posts,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList: postList, addPost: addPost ,addInitialPosts:addInitialPosts }}>
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Post 1",
//     body: "this is post 1",
//     reaction: 0,
//     userid: "user-1",
//     tags: ["post", "1"],
//   },
//   {
//     id: "2",
//     title: "Post 2",
//     body: "this is post 2",
//     reaction: 0,
//     userid: "user-2",
//     tags: ["post", "2"],
//   },
// ];

export default PostListProvider;
