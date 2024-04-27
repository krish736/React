import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
});

const PostListReducer = (currPostList, action) => {

    let newPostList = currPostList
    if(action.type === "ADD_POST"){
        newPostList = [action.payload,...currPostList]
    }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userid, postTitle, postBody, postTags) => {
    dispatchPostList ({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userid: userid,
        title: postTitle,
        body: postBody,
        reaction: 0,
        tags: postTags,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList: postList, addPost: addPost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Post 1",
    body: "this is post 1",
    reaction: 0,
    userid: "user-1",
    tags: ["post", "1"],
  },
  {
    id: "2",
    title: "Post 2",
    body: "this is post 2",
    reaction: 0,
    userid: "user-2",
    tags: ["post", "2"],
  },
];

export default PostListProvider;
