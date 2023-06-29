import express, { json } from "express";
import cors from "cors";
import { config } from "./config.js";
import routes from "./routes/index.js";
import mongoose from "mongoose";

const app = express();

app.use(json());

app.use("/api", routes);

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    methods: "GET, POST, PUT, DELETE",
  })
);

mongoose.connect(config.database.dbUrlAtlas);
//mongoose.connect("mongodb://127.0.0.1:27017/mydb");
// mongoose.connect(
//   "mongodb+srv://armandorivasvdev:1234@backend-node.mymctr1.mongodb.net/?retryWrites=true&w=majority"
// );

app.listen(config.app.port, config.app.host, () => {
  console.log(
    `Server listen http://${config.app.host} PORT:${config.app.port} `
  );
});
