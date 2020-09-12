"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var empControler_1 = __importDefault(require("../controller/empControler"));
var empRoute = /** @class */ (function () {
    function empRoute() {
        this.router = express_1.default.Router();
        this.empCont = new empControler_1.default();
        this.router.get('/getEmpData', this.empCont.getEmpControler);
    }
    return empRoute;
}());
exports.default = empRoute;
