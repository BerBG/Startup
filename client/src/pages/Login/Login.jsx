import React, { useState, useContext, useEffect } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import "./Login.css";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const checkFirstVisit = async () => {
      try {
        const userResponse = await axios.get("/profile");
        const { data: userData } = userResponse;
        if (userData.firstVisit) {
          navigate("/profile-selection");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error while checking first visit:", error);
        // Handle error as needed, maybe redirect to an error page
      }
    };

    checkFirstVisit(); // Check if it's the user's first visit when component mounts
  }, [navigate]);

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      const { data: responseData } = response;
      if (response.status === 200) {
        toast.success("Login successful!");
        // Fetch updated user data after login
        const userResponse = await axios.get("/profile");
        setUser(userResponse.data);

        setData({ email: "", password: "" });
        // Redirect to profile selection page after login
        navigate("/profile-selection");
      } else {
        toast.error(responseData.error || "Error occurred while logging in.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error occurred while logging in.");
    }
  };

  return (
    <Layout>
      <div className="wrapper">
        <form onSubmit={loginUser} className="login-form">
          <h1>Log in</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <MdEmail className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
}
