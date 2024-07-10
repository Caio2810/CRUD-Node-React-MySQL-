import { db } from "../db.js";

export const getAllAuthData = (_, res) => {
  const q = "SELECT * FROM auth";

  db.query(q, (err, data) => {
    if (err) {
      console.error("Erro ao buscar dados de autenticação:", err);
      return res.status(500).json(err);
    }

    return res.status(200).json(data);
  });
};

// Função para fazer login
export const loginUser = (req, res) => {
  const { login, senha } = req.body;


  const q = "SELECT * FROM auth WHERE login = ?";

  db.query(q, [login], (err, data) => {
    if (err) {
      console.error("Erro no banco de dados:", err);
      return res.status(500).json(err);
    }
    if (data.length === 0) {
      console.log("Usuário não encontrado.");
      return res.status(404).json("Usuário não encontrado.");
    }

    const user = data[0];

    if (senha !== user.senha) {
      console.log("Senha incorreta.");
      return res.status(400).json("Senha incorreta.");
    }

    console.log("Login bem-sucedido.");

    return res.status(200).json({ success: true, message: "Login bem-sucedido." });
  });
};
