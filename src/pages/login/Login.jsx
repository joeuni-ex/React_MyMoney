import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState(""); //이메일
  const [password, setPassword] = useState(""); //비밀번호

  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className="btn">로그인</button>
    </form>
  );
};

export default Login;
