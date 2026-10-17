import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/hello", (_req, res) => {
  res.json({
    message: "API funcionando correctamente"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
