const express = require("express");
const http_server = express();

// Configur Dotenv
require("dotenv").config();
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

http_server.listen(PORT, HOSTNAME, () => {
  console.log(`http://${HOSTNAME}:${PORT}`);
});

http_server.get("/", (req, res) => {
  res.status(200).json({
    message: "Server started successfully",
  });
});
