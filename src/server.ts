import express from "express";
const app = express();
const porta = 3000;

app.get("/movies", (req, res) => {
  res.send("Listagem de filmes");
});
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
