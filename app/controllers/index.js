"use strict"

module.exports.init = (app) => {

app.get("/", (req, res) => {
    res.send("Hola!")
})

app.get("/run", async (req, res) => {
    const result = {}
    res.send(result)
})
}
