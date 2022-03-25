"use strict"

const express = require("express")
const controllers = require("./controllers")
const bot = require("./bot")

const app = express()
controllers.init(app)

const server = app.listen(80, () => {
    console.log(`TestingHost on 4040 port`)
})
server.keepAliveTimeout = 65000 // Ensure all inactive connections are terminated by the ALB, by setting this a few seconds higher than the ALB idle timeout
server.headersTimeout = 66000
