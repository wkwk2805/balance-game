const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/BalanceGame.html");
});

app.listen(3000, () => {
  console.log("연결성공");
});
