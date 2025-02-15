"use strict";
module.exports = function isWeekend(date) {
    const dayIndex = date.getDay();
    return dayIndex === 0 || dayIndex === 6;
};
