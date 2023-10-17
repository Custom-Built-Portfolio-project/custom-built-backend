import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routes/index.js";
import cors from "cors";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3001;

const connection = mongoose.connect(
  "mongodb+srv://facundovies:123@cluster0.3geflhe.mongodb.net/MongoAvanzado?retryWrites=true&w=majority"
);

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

const corsOptions = {
  origin: "*", //TODO: update to deployment url
  credentials: true,
};

app.use(cors(corsOptions));

/* server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
    );
    next();
}); */
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// Error catching endware.
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
app.use(routes);

export default app;
