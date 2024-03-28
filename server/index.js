const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors"); // Importe o pacote cors
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not connected", err));


// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Use o middleware cors para habilitar o CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Especifique o domínio do cliente que está fazendo a solicitação
    credentials: true, // Permita credenciais na solicitação (necessário se estiver usando cookies)
  })
);

app.use("/", require("./routes/authRoutes"));

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
