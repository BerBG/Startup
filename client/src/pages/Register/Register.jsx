import React, { useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./Register.css";
import { MdBadge } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async () => {
    try {
      const { name, email, password } = data;
      const response = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ name: "", email: "", password: "" });
        toast.success("Registro bem-sucedido!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao registrar usuário");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password } = data;
      if (!name || !email || !password) {
        throw new Error("Por favor, preencha todos os campos");
      }
      await registerUser();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Layout>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <MdBadge className="icon" />
          </div>

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
          <button type="submit">Submit</button>

          <div className="register-link">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
}
