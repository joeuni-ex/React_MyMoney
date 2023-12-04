import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./Components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  //파이어 베이스 인증확인을 한 후 앱을 사용가능
  const { authIsReady, user } = useAuthContext();

  return (
    <>
      <div className="App">
        {authIsReady && (
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route path="/login" element={!user ? <Login /> : <Home />} />
              <Route path="/signup" element={!user ? <Signup /> : <Home />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </>
  );
}

export default App;
