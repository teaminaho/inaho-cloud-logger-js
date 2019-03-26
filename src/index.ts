import { config, createLogger, format, transports } from "winston";
const { printf } = format;

const myFormat = printf(({ level, message }) => {
  const log = {
    timestamp: new Date().toISOString(),
    level,
    message,
    pid: process.pid,
  };
  return JSON.stringify(log);
});

const logger = createLogger({
  level: "info",
  levels: config.syslog.levels,
  format: myFormat,
  transports: [new transports.Console()],
});

export = logger;
