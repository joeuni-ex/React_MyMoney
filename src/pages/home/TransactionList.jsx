import { useFirestore } from "../../hooks/useFireStore";
import styles from "./Home.module.css";

const TransactionList = ({
  transactions,
  setItem,
  onModalAlert,
  openAlert,
}) => {
  const { deleteDocument } = useFirestore("transactions"); // 삭제 메서드 가져오기

  const handleClick = (e, item) => {
    onModalAlert(!openAlert);
    setItem(item);
  };

  return (
    <div className={styles.transactions}>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <li>
            <p
              onClick={(e) => handleClick(e, transaction)}
              className={styles.name}
            >
              {transaction.name}
            </p>
            <p className={styles.amount}>{transaction.amount}원</p>

            <button onClick={() => deleteDocument(transaction.id)}>X</button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
