"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isWeekend_1 = __importDefault(require("./isWeekend"));
test('exports function', () => {
    expect(typeof isWeekend_1.default).toBe('function');
});
test('weekday is not weekend', () => {
    const date = new Date('2019-10-03T12:26:52.679Z');
    expect((0, isWeekend_1.default)(date)).toBe(false);
});
test('weekend is a weekend', () => {
    const date = new Date('2019-10-06T07:26:52.807Z');
    expect((0, isWeekend_1.default)(date)).toBe(true);
});
