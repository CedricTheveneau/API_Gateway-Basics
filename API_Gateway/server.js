require("dotenv").config();
const express = require("express");
const proxy = require("express-http-proxy");
const port = process.env.PORT || 8080;
const proxyURI = process.env.PROXY_URI;

const app = express();
app.use(express.json());

app.use("/api/auth", proxy(proxyURI));

app.listen(port, () => {
  console.log(`API Gateway en cours d'exécution sur le port ${port}`);
});
