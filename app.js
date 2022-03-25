"use strict"

const express = require("express")
// const controllers = require("./controllers")
const bot = require("./bot")

const port = process.env.PORT || 80

const app = express()
// controllers.init(app)

app.get("/", (req, res) => {
    res.send("Hola!")
})

app.get("/run", async (req, res) => {
    const result = {}
    res.send(result)
})

const server = app.listen(port, () => {
    console.log(`Started on ${port} port.`)
})
server.keepAliveTimeout = 65000 // Ensure all inactive connections are terminated by the ALB, by setting this a few seconds higher than the ALB idle timeout
server.headersTimeout = 66000
