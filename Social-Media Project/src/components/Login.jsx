import styles from "./Login.module.css";

const Login = () => {
  return (
    <form className={styles.login}>
      <h1 className="h3 mb-3 fw-normal">Login to Encord</h1>
      <div className={styles.input}>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            fdprocessedid="oerdr8"
          />
          <label for="floatingInput">Username</label>
        </div>
      </div>
      <div className={styles.input}>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            fdprocessedid="uvdchp"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>

      <button
        className="btn btn-primary w-100 py-2"
        type="submit"
        fdprocessedid="pixm5e"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
