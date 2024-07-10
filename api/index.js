import express from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Rotas de usuários
app.use("/users", userRoutes);

// Rotas de autenticação
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
