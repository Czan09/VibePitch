const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(express.json()); // important!


// Example route: insert user
app.post("/add-user", async (req, res) => {
  try {
    const { name } = req.body;
    const [result] = await db.execute(
      "INSERT INTO Users (name) VALUES (?)",
      [name]
    );
    res.json({ success: true, userId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "DB Error" });
  }
});

// Example route: get all users
app.get("/users", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM Users");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "DB Error" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
