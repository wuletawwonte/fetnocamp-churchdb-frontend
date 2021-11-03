import MainNavbar from "./components/MainNavbar";
import Login from "./pages/Login";
import Practice from "./pages/Practice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavbar sx={{mb: 8}} />
        <Routes>
          <Route exact path="/" element={<Practice />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
