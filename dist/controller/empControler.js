"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: class-name
var empControll = /** @class */ (function () {
    function empControll() {
        var _this = this;
        this.data = [{ name: 'abcd', salary: 4500 }];
        this.getEmpControler = function (request, response) {
            _this.data.push({ name: 'demo1', salary: 5500 });
            response.json(_this.data);
        };
    }
    return empControll;
}());
exports.default = empControll;
