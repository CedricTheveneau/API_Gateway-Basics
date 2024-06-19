require("dotenv").config();
const express = require("express");
const proxy = require("express-http-proxy");
const roleCheck = require("./app/middlewares/roleCheck.js");
const port = process.env.PORT || 8080;
const proxyURIAuth = process.env.PROXY_URI_AUTH;
const proxyURIProduct = process.env.PROXY_URI_PRODUCT;

const app = express();
app.use(express.json());

app.use("/api/auth", proxy(proxyURIAuth));
app.use("/api/products", roleCheck, proxy(proxyURIProduct));

app.listen(port, () => {
  console.log(`API Gateway en cours d'exécution sur le port ${port}`);
});
