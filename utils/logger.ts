interface Logger {
  info: (...params: unknown[]) => void;
  error: (...params: unknown[]) => void;
}

export const info = (...params: unknown[]): void => {
  console.log(...params);
};

export const error = (...params: unknown[]): void => {
  console.error(...params);
};

const logger: Logger = {
  info,
  error
};

export default logger;