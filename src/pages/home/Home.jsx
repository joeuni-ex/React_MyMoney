import TransactionForm from "../../Components/TransactionForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import styles from "./Home.module.css";
import TransactionList from "./TransactionList";

const Home = () => {
  const { user } = useAuthContext();
  const { documetns, error } = useCollection("transactions");
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documetns && <TransactionList transactions={documetns} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
