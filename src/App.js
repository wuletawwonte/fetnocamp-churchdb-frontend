import {useState} from 'react';
import MainNavbar from "./components/MainNavbar";
import Login from "./pages/Login";
import Practice from "./pages/Practice";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import { UserContext } from "./context/UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{user, setUser}} >
          <MainNavbar sx={{ mb: 8 }} />
          <Routes>
            <Route exact path="/" element={<Practice />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
