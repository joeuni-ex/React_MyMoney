//CSS 모듈을 사용하면 CSS클래스가 다른 컴포넌트에도 적용되는것을 방지함
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  //유저 정보 가져오기
  const { user } = useAuthContext();
  //로그아웃 메서드
  const { logout } = useLogout();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">myMoney</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li className={styles.navUser}>안녕하세요, {user.displayName}님</li>
            <li>
              <button className="btn" onClick={logout}>
                로그아웃
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
