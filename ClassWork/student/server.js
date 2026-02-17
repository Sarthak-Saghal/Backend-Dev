const express = require("express");
const fs = require("fs");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// ---------- Helper Functions ----------
function getStudents() {
  const data = fs.readFileSync("students.json");
  return JSON.parse(data);
}

function saveStudents(students) {
  fs.writeFileSync("students.json", JSON.stringify(students, null, 2));
}

// ---------- Routes ----------

// Home page
app.get("/", (req, res) => {
  res.render("home");
});

// Add student
app.post("/add-student", (req, res) => {
  const students = getStudents();

  const newStudent = {
    id: Date.now().toString(),
    name: req.body.name,
    roll: req.body.roll,
    branch: req.body.branch
  };

  students.push(newStudent);
  saveStudents(students);

  res.redirect("/students");
});

// Show students
app.get("/students", (req, res) => {
  let students = getStudents();

  const branch = req.query.branch;
  if (branch) {
    students = students.filter(s => s.branch === branch);
  }

  res.render("students", {
    students,
    total: students.length
  });
});

// Delete student
app.get("/students/delete/:id", (req, res) => {
  let students = getStudents();

  students = students.filter(s => s.id !== req.params.id);

  saveStudents(students);
  res.redirect("/students");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
