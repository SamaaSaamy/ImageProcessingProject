"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import path from "path";
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var port = 3000;
// const dir = path.join(__dirname, "public");
// app.use(express.static(dir));
app.use("/", index_1.default);
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
