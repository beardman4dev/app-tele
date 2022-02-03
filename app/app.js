"use strict"

const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hola!")
})

app.get("/run", async (req, res) => {
    const result = {}
    res.send(result)
})

const server = app.listen(4040, console.log(`TestingHost`))
server.keepAliveTimeout = 65000 // Ensure all inactive connections are terminated by the ALB, by setting this a few seconds higher than the ALB idle timeout
server.headersTimeout = 66000
