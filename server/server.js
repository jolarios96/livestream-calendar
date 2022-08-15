require("dotenv").config();
const express = require("express");
const app = express();

// placeholder data
app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log(
    `Running server in ${process.env.NODE_ENV}mode,\nServer started on ${PORT}.`
  )
);
