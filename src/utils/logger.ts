import { createLogger } from "bunyan";

const logger = createLogger({
  name: "nobel-api",
  streams: [
    {
      level: "info",
      type: "rotating-file",
      path: process.cwd() + "/logs/app.log"
    },
    {
      level: "debug",
      stream: process.stderr
    }
  ],
  src: true
});
export default logger;