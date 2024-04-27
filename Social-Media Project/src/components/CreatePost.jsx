import { useContext, useRef } from "react";
import styles from "./CreatePost.module.css";
import {PostList }from "../store/post-list-store";
const CreatePost = () => {

  const {addPost} = useContext(PostList)

  const useridELement = useRef();
  const postTitleELement = useRef();
  const postBodyELement = useRef();
  const postTagsELement = useRef();

  const handlePostButton = () => {
    const userid =  useridELement.current.value
    const postTitle =  postTitleELement.current.value
    const postBody =  postBodyELement.current.value
    const postTags =  postTagsELement.current.value.split(" ")

    useridELement.current.value = ""
    postTitleELement.current.value = ""
    postBodyELement.current.value = ""
    postTagsELement.current.value = ""

    addPost(userid, postTitle, postBody, postTags )
  };

  return (
    <div className={styles.createPost}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="userid"
          placeholder="Your Username"
          ref={useridELement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Your Post Title"
          ref={postTitleELement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Description
        </label>
        <textarea
          className="form-control"
          id="body"
          rows="4"
          ref={postBodyELement}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Post Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space!"
          ref={postTagsELement}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handlePostButton}
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
