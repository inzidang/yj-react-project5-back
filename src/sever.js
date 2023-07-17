import "dotenv/config";
import "./db.js";
import express from "express";
import morgan from "morgan";
import rentalRouter from "./routers/rentalRouter.js";

// console.log(process.env.DB_URL);
const PORT = 8080;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/rental", rentalRouter)

// app.get('/test', function (req, res) {
//   res.json({ok:"hello text"});
// });


const handleListening =() => console.log(`😍Server on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);