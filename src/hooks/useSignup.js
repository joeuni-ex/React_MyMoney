import { useEffect, useState } from "react";
import { fireauth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState();
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCancelled] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // 이메일,패스워드로 가입
      const res = await fireauth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("가입중 오류가 발생했습니다.");
      }
      // 유저 프로파일에 이름을 업데이트
      await res.user.updateProfile({ displayName: displayName });

      // 유저 정보를 state에 저장한다.
      dispatch({ type: "LOGIN", payload: res.user });
      //작업이 취소되었다면 스테이트 업데이트를 하지 않는다.
      if (!isCancelled) {
        setError(null);
        setIsPending(false);
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
    // 로그아웃 작업중 중간에 사라진다면
    // useEffect의 return이 unmount될때의 작업(클린업)이 된다.
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
