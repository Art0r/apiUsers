import express from "express";
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/", routes);

app.listen("8000", () => {
    console.log("app rodando!");
});