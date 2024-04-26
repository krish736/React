import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className={styles.appContainer}>
        <SideBar />
        <div className={styles.hero}>
          <Header />
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
