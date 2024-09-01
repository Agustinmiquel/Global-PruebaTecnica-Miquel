import logger from "pino";
import dayjs from 'dayjs';

export const logs = logger({
  transport: {
    target: "pino-pretty",
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default logs;
