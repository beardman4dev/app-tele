"use strict"

const express = require("express")
const bot = require("./bot")
const port = process.env.PORT || 80

const app = express()

app.get("/", (req, res) => res.send("Hola!"))
app.get("/run", (req, res) => res.json({ ololo: "ololo" }))

const server = app.listen(port, () => console.log({ started: `Started on ${port} port.`, date: new Date() }))

server.keepAliveTimeout = 65000 // Ensure all inactive connections are terminated by the ALB, by setting this a few seconds higher than the ALB idle timeout
server.headersTimeout = 66000
