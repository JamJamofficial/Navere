"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getDaysInMonth_1 = __importDefault(require("./getDaysInMonth"));
test('get days in month', () => {
    expect((0, getDaysInMonth_1.default)(2018, 4)).toBe(31);
    expect((0, getDaysInMonth_1.default)(2018, 8)).toBe(30);
    expect((0, getDaysInMonth_1.default)(2009, 1)).toBe(28);
    expect((0, getDaysInMonth_1.default)(2008, 1)).toBe(29);
});
