const slots = require("./router/slots");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/slots", slots);

app.listen(3000);
