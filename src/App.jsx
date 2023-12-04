import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./Components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  //파이어 베이스 인증확인을 한 후 앱을 사용가능
  const { authIsReady } = useAuthContext();

  return (
    <>
      <div className="App">
        {authIsReady && (
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </>
  );
}

export default App;
