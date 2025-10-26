const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const checklistRoutes = require('./routes/checklistRoutes');



mongoose.connect("mongodb://localhost:27017/Maintenance", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


//Routes
app.use('/', checklistRoutes);

app.get("/home", (req, res) => {
  res.render("Checklist");
});


app.post("/data", (req, res) => {
  console.log("Nhận data:", req.body);
  res.json({ status: "ok", received: req.body });
});


app.listen(port, "0.0.0.0", () => {
  console.log(`http://localhost:${port}`);
});
