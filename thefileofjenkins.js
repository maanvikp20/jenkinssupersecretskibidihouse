const express = require("express");
const path = require("path");
const app = express();

// Middleware to serve static files ()
// Middleware is a function that sits between the request from the client and the response from the server.
// Think of it as a gatekeeper or pipeline every request passes through a chain of middleware functions before reaching the final route

app.use(express.static(path.join(__dirname, "public")));

app.get("/puzzle1", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "puzzle1.html"));
});

app.get("/jenkinslogo", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "puzzle2.html"));
});

app.get("/36", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "puzzle3.html"));
});

app.get("/david", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "puzzle4.html"));
});

app.get("/67", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "puzzle5.html"));
});

app.get("/something", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "puzzle6.html"));
});

app.get("/499200", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "puzzle7.html"));
});

app.get("/end", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "end.html"));
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000/puzzle1`);
});
