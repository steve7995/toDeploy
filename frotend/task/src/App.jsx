import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Content from "./pages/Content";
import LogIn from "./pages/Login";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
