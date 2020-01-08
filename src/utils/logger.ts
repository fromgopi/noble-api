import { createLogger } from "bunyan";

const logger = createLogger({
  name: "nobel-api",
  streams: [
    {
      level: "info",
      type: "rotating-file",
      path: "/var/api-logs/noble-api/app.log"
    },
    {
      level: "debug",
      stream: process.stderr
    },
    {
      level: "error",
      type: "rotating-file",
      path: "/var/api-logs/noble-api/app.log"
    }
  ],
  src: true
});
export default logger;