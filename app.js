import "dotenv/config"
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import session from "express-session";

// connect to the database
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);

const app = express()

app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
)

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

app.use(express.json());
Hello(app)
Lab5(app)
UserRoutes(app)
CourseRoutes(app)
ModuleRoutes(app)
app.listen(process.env.PORT || 4000);