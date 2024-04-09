import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Register from "../src/pages/Register/Register";
import Login from "../src/pages/Login/Login";
import ProfileSelection from "./pages/ProfileSelection/ProfileSelection";
import TutorProfile from "./pages/TutorProfile/TutorProfile";
import StudentProfile from "./pages/StudentProfile/StudentProfile";
import Dashboard from "./pages/Dashboard/Dashboard";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import TutorContextProvider, { TutorContext } from "../context/TutorContext";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <TutorContextProvider>
        <div className="app">
          <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile-selection" element={<ProfileSelection  />} />
            <Route path="/profile/tutor" element={<TutorProfile />} />
            <Route path="/profile/student" element={<StudentProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </TutorContextProvider>
    </UserContextProvider>
  );
};

export default App;
