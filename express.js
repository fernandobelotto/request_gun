const express = require('express')

const cors = require('cors')

const api = express()


api.use(cors())
api.post("/tests", (req, res) => {
    console.log("Chamou!!")
    setTimeout(() => {
        console.log("Respondeu")
        return res.json({ ok: true })
    }, 100)

})

api.listen(8083)