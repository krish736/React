import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [SelectedPostArea, SetSelectedPostArea] = useState("View Post");
  return (
    <>
      <div className={styles.appContainer}>
        <SideBar SelectedPostArea={SelectedPostArea} />
        <div className={styles.hero}>
          <Header />
          {SelectedPostArea === "View Post" ? <PostList /> : <CreatePost />}
        </div>
      </div>
    </>
  );
}

export default App;
