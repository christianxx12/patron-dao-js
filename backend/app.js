const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./config/database");

const app = express();
app.use(cors()); // Habilita CORS
app.use(express.json());
app.use("/api", userRoutes);

const startServer = async () => {
  try {
    await sequelize.sync(); // Sincroniza la base de datos
    app.listen(3001, () => console.log("Server is running on port 3000"));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
