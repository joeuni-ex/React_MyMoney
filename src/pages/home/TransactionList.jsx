import { useFirestore } from "../../hooks/useFireStore";
import styles from "./Home.module.css";

const TransactionList = ({ transactions }) => {
  const { deleteDocument } = useFirestore("transactions"); // 삭제 메서드 가져오기
  return (
    <div className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>{transaction.amount}원</p>
          <button onClick={() => deleteDocument(transaction.id)}>X</button>
        </li>
      ))}
    </div>
  );
};

export default TransactionList;
