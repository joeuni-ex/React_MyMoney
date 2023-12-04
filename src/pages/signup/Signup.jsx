import { useState } from "react";
import styles from "./Signup.module.css";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState(""); //이메일
  const [password, setPassword] = useState(""); //비밀번호
  const [name, setName] = useState(""); //이름
  //미리 만든 가입하기 hook 으로 가입하기 함수와 에러, 로딩 상태 가져옴
  const { signup, error, isPending } = useSignup(); //hooks 사용

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name); //signup 메소드 사용하여 가입
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
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
      <label>
        <span>name:</span>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      {!isPending && <button className="btn">가입하기</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
