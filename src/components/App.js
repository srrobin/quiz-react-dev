import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../Contexts/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Quize from "../pages/Quize";
import Result from "../pages/Result";
import SignUp from "../pages/SignUp";
import "../style.css";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quize" element={<Quize />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
