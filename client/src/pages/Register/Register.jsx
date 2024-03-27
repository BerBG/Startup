// Register.js

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
    profileType: "", // Adicione o campo profileType no estado
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password, profileType } = data; // Certifique-se de incluir profileType aqui
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
        profileType, // Certifique-se de incluir profileType aqui também
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({}); // Limpe os dados após o registro bem-sucedido
        toast.success("Registro bem-sucedido!");
        // Redirecionar para a página de login após o registro bem-sucedido
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="wrapper">
        <form onSubmit={registerUser}>
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
