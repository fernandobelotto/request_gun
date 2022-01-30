
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/test", (req, res) => setTimeout(res.send({ ok: true }), 300))

app.listen(8083, () => {
    console.log('listing in localhost:8083')
})