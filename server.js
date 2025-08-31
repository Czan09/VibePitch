const express = require("express");
const db = require("./db");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());
app.post("/add-user", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Name, email, and password are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.execute(
      "INSERT INTO Users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, role || "user"] // default role is 'user'
    );

    res.json({ success: true, userId: result.insertId });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
