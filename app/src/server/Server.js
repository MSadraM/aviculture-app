const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors"); // اضافه کردن بسته cors

const app = express();
const port = 3001;

const secretKey = "your-secret-key";

app.use(cors());

app.use(bodyParser.json());

// Fake user data (for demonstration purposes)
const users = [
  { id: 1, username: "u1", password: "p1" },
  { id: 2, username: "u2", password: "p2" },
];

// Main route
app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });
    res.json({ success: true, token });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

app.get("/check-auth", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.json({ authenticated: false });
  }

  try {
    const decodedToken = jwt.verify(token, secretKey);
    return res.json({ authenticated: true });
  } catch (error) {
    return res.json({ authenticated: false });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
