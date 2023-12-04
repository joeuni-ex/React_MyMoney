import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { fireauth } from "../firebase/config";

export const useLogin = () => {
  const [error, setError] = useState();
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCancelled] = useState(false);

  // 로그인 작업중 중간에 사라진다면
  // useEffect의 return이 unmount될때의 작업(클린업)이 된다.

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      //파이어베이스 로그인하고 인증 정보 리턴
      const res = await fireauth.signInWithEmailAndPassword(email, password);
      //로그인 액션 디스패치
      dispatch({ type: "LOGIN", payload: res.user });
      //작업이 취소되었다면 state업데이트를 하지 않는다.

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    setIsCancelled(false);
    // 로그인 작업중 중간에 사라진다면
    // useEffect의 return이 unmount될때의 작업(클린업)이 된다.
    return () => setIsCancelled(true);
  }, []);

  return { login, error, isPending };
};
