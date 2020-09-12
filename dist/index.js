"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var empRoutes_1 = __importDefault(require("./routes/empRoutes"));
mongoose_1.default.connect('mongodb://localhost:27017/typeexpress', { useNewUrlParser: true, useUnifiedTopology: true })
    // tslint:disable-next-line: no-console
    .then(function () { return console.log('connected to db'); })
    .catch(function (err) { return console.log(err); });
var app = express_1.default();
var emp = new empRoutes_1.default();
// tslint:disable-next-line: comment-format
//body-parser
app.use(body_parser_1.default.json());
// default pageload
app.get('/', function (request, response) {
    response.redirect('/emp/getEmpData');
});
// tslint:disable-next-line: comment-format
//routes
app.use('/emp', emp.router);
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("server run at " + port); });
