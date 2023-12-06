import React, { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFireStore";

const TransactionForm = ({ uid }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");
  const { addDocument, response } = useFirestore("transactions"); //파이어스토어에 새로 문서추가 가져오기

  const handleSubmit = (e) => {
    e.preventDefault();

    addDocument({
      uid,
      name,
      amount,
      memo,
    });
  };

  //db에 새문서 저장후 폼 내용 없애기
  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
      setMemo("");
    }
  }, [response.success]);
  return (
    <>
      <h3>거래 추가</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>거래명:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>가격(원):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <label>
          <span>메모:</span>
          <textarea
            style={{ color: "black" }}
            onChange={(e) => setMemo(e.target.value)}
            value={memo}
            required
            cols="27"
            rows="4"
          ></textarea>
        </label>

        <button>추가</button>
      </form>
    </>
  );
};

export default TransactionForm;
