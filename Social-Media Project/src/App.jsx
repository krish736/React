import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [SelectedPostArea, SetSelectedPostArea] = useState("View Post");
  return (
    <PostListProvider>
      <div className={styles.appContainer}>
        <SideBar
          SelectedPostArea={SelectedPostArea}
          SetSelectedPostArea={SetSelectedPostArea}
        />
        <div className={styles.hero}>
          <Header />

          {SelectedPostArea === "View Post" ? <PostList /> : <CreatePost />}
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
