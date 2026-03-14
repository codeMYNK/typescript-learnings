const express = require("express");

const app = express();

const PORT = 8034;

app.get("/fast", async (req, res) => {
  res.send({ message: "Sending from fast" });
});

app.get("/slow", async (req, res) => {
  await sleep(7);
  res.send({ message: "Response from slow" });
});

app.listen(PORT, () => {
  console.log(`Running Port: ${PORT}`);
});


function sleep(secound = 1) {
  return new Promise((resolve) => {
    return setTimeout(resolve, secound * 1000);
  });
}

