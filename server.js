const path = require("path")
const express = require("express")
const app = express()


app.use(express.static("public"))

app.get("/stats", (req, res, next) => {
    next(new Error("uhoh"))
})

app.get("/:name", (req, res, next) => {
    res.send(req.params.name)
})


app.get("/", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "./public/index.html"))
})

app.use((err, req, res, next) => {
    console.log(err.message)
    res.send(err.message)
})

app.listen(8000, (err) => {
    console.log("Success!!!!")
})

