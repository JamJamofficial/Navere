"use strict";
module.exports = function addDaysToDate(date, offset) {
    return new Date(date.getTime() + offset * 24 * 60 * 60 * 1000);
};
