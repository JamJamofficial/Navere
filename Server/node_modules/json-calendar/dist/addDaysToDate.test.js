"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addDaysToDate_1 = __importDefault(require("./addDaysToDate"));
test('add days to date', () => {
    const date = new Date(2018, 8, 29, 0, 0);
    expect((0, addDaysToDate_1.default)(date, 0).getDate()).toBe(date.getDate());
    expect((0, addDaysToDate_1.default)(date, -3).getDate()).toBe(26);
    expect((0, addDaysToDate_1.default)(date, 10).getDate()).toBe(9);
});
