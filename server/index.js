const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const chatRoutes = require("./routes/chatRoutes");

const app = express();
app.use(cors(
    {
        origin: ["https://info-mate-frontend.vercel.app"],
        methods: ["POST"],
        credentials: true,
    }
));
app.use(bodyParser.json());

dotenv.config();

app.use("/", chatRoutes);

app.get("/", (req, res) => {
    res.send("Hello");
})

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
