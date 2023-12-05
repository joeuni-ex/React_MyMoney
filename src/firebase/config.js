import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGEING_SENDERID,
  appId: import.meta.env.VITE_APPID,
};

//본인 계정의 키 등 설정값을 가지고 초기화
//firebase init
firebase.initializeApp(firebaseConfig);

//파이어 스토어 DB서비스
//init service
const firedb = firebase.firestore();
//인증서비스
const fireauth = firebase.auth();
//timestamp 시간
const timestamp = firebase.firestore.Timestamp;

export { firedb, fireauth, timestamp };
