import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const porta = 3000;
const prisma = new PrismaClient();

app.get("/movies", async (req, res) => {
  const movies = await prisma.movies.findMany();
  res.json(movies);
});
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
