import express from "express";
import path from "path";
import routes from "./routes/index";

const app = express();
const port = 3000;

const dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.use("/", routes);

app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
