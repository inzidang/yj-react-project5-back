import "dotenv/config";
import "./db.js";
import express from "express";
import morgan from "morgan";
import rentalRouter from "./routers/rentalRouter.js";
import cors from "cors";
import foodsRouter from "./routers/foodsRouter.js";

// console.log(process.env.DB_URL);
const PORT = 8080;
const app = express();

const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/rental", rentalRouter)
app.use("/api/foods", foodsRouter);

// app.get('/test', function (req, res) {
//   res.json({ok:"hello text"});
// });


const handleListening =() => console.log(`😍Server on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);