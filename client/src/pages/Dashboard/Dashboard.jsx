import React from "react";
import Layout from "../Layout/Layout";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <Layout>
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        {!!user && <h2>Hi {user.name}!</h2>}
      </div>
    </Layout>
  );
}
