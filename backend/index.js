import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/database.cjs";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import bodyParser from 'body-parser';


dotenv.config();

const app = express();


const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);


app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());

// Importing Routes
import authRoutes from "./routes/auth.routes.js"
import childRoutes from "./routes/child.routes.js"
// import adminRoutes from "./routes/admin.routes.js"
// import parentRoutes from "./routes/parent.routes.js"


app.use("/api/auth",authRoutes);
app.use("/api/child",childRoutes)
// app.use("/api/admin",adminRoutes);
// app.use("/api/parent",parentRoutes);





app.get("/", (req, res) => {
  res.send("Hello from the Backend-Api");
});

app.listen(port, async () => {
  console.log(`Server Listening at PORT ${port}`);
  await sequelize.authenticate();
});

