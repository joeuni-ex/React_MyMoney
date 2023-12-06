import { useEffect, useState } from "react";
import { firedb } from "../firebase/config";

export const useCollection = (collection, query, order, order2) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = firedb.collection(collection);

    //두번째 파라미터 즉 query가 있으면
    if (query) {
      ref = ref.where(...query); //...으로 배열을 각각의 값으로 변환 [1,2,3] => (1,2,3)
    }
    ref = ref.orderBy(order, order2);
    // ref = ref.orderBy("amount");

    const unsub = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id }); //모든 필드가 추가되고, doc id도 추가
        });

        setDocuments(results);
        setError(null);
      },
      (err) => {
        console.log(err);
        setError("데이터를 가져올 수 없습니다.");
      }
    );

    return () => unsub();
  }, [order, order2]);

  return { documents, error };
};
