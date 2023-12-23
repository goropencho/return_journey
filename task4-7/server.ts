require("dotenv").config()
import express from "express";
import errorhandler from 'errorhandler';
import { logRequest } from "./utils/logger";

const app = express();
app.use(express.json());

// Logger 
app.use(logRequest)

// Routers
app.use("/products", require("./routes/products"));

// Error Handlers
if ('development' == process.env.MODE) {
    app.use(errorhandler());
} else {
    app.use(function (err, req, res, next) {
        console.error(err);
        res.send(500, "Internal server error");
    });
}

// Server Listener
app.listen(3000, () => {
    console.log("Server is running on 3000")
})


export default app;