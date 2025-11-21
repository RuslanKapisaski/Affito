import express, { Router } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/hotels", (req, res) => {
  res.json({ hotels: ["hotel 1", "hotel 2", "hotel 3"] });
});

app.listen(5000, () =>
  console.log("Server is running on http://localhost:5000")
);
