require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// db conexão
connection();

// middlewares
app.use(express.json());
app.use(cors());

// rotas
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Na porta ${port}`));