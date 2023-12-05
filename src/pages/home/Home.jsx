import { useState } from "react";
import TransactionForm from "../../Components/TransactionForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import styles from "./Home.module.css";
import TransactionList from "./TransactionList";
import { useEffect } from "react";
import Footer from "./Footer";
import ModalAlert from "./ModalAlert";

const Home = () => {
  const { user } = useAuthContext();
  const [order, setOrder] = useState("amount");
  const [order2, setOrder2] = useState("asc");
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    order,
    order2
  );

  //모달창
  const [openAlert, setOpenAlert] = useState(false);

  const [item, setItem] = useState("");

  const onModalAlert = () => {
    setOpenAlert(!openAlert);
  };

  //정렬
  useEffect(() => {}, [order]);
  useEffect(() => {}, [order2]);

  const handleSortChange = (e) => {
    //console.log(e.target.value);
    setOrder(e.target.value);
  };

  const handleSortChange2 = (e) => {
    //console.log(e.target.value);
    setOrder2(e.target.value);
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <TransactionForm uid={user.uid} />
          </div>
          <div className={styles.content}>
            <p className={styles.contentTitle}>거래내역</p>
            <div className={styles.sortContainer}>
              <select
                className={styles.order}
                value={order}
                onChange={handleSortChange}
              >
                <option value="createdAt">최신순</option>
                <option value="amount">비용순</option>
                <option value="name">가나다순</option>
              </select>

              <select
                className={styles.order}
                value={order2}
                onChange={handleSortChange2}
              >
                <option value="desc">내림차순</option>
                <option value="asc">오름차순</option>
              </select>
            </div>
            {error && <p>{error}</p>}
            <div>
              {documents && (
                <TransactionList
                  transactions={documents}
                  setItem={setItem}
                  onModalAlert={onModalAlert}
                  openAlert={openAlert}
                />
              )}
              {/* 모달창 */}
              {openAlert && (
                <ModalAlert onModalAlert={onModalAlert} item={item} />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
