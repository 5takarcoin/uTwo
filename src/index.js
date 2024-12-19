import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "src/.env",
});

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("noicee");
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is running at PORT: ${PORT}`);
    });
  })
  .catch((err) => console.log("Error", err));
