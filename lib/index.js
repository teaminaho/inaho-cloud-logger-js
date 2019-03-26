"use strict";
const winston_1 = require("winston");
const { printf } = winston_1.format;
const myFormat = printf(({ level, message }) => {
    const log = {
        timestamp: new Date().toISOString(),
        level,
        message,
        pid: process.pid,
    };
    return JSON.stringify(log);
});
const logger = winston_1.createLogger({
    level: "info",
    levels: winston_1.config.syslog.levels,
    format: myFormat,
    transports: [new winston_1.transports.Console()],
});
module.exports = logger;
