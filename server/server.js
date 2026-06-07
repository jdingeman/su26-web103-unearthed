import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import giftsRouter from "./routes/gifts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use("/public", express.static(path.resolve(__dirname, "../client/public")));
app.use("/scripts", express.static(path.resolve(__dirname, "../client/public/scripts")));
app.use("/gifts", giftsRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>',
    );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
