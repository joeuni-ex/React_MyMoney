// 인증 컨텍스트를 사용하기 위한 훅(반복 사용 시 필요)
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  //usecontext를 못가져 왔을 때 에러 발생
  if (!context) {
    throw Error(
      "useAuthContext는 AuthContextProvider 내에서만 사용가능합니다."
    );
  }

  return context;
};
