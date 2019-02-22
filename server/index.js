// const express = require("express");
const consola = require("consola");
// const api = require("./api");
// import { Nuxt } from "nuxt";
import express from "express";
import api from "./api";

const { Nuxt, Builder } = require("nuxt");
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// var options = {
//   setHeaders: function(res, path, stat) {
//     res.set("Content-Type", "application/json;charset=UTF-8");
//   }
// };
// app.use(express.static('public', options));

app.use("/api", api);
// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || "192.168.2.23",
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
  console.log("SERVER - Server listening on " + host + ":" + port); // eslint-disable-line no-console
}
start();
