const yellow = "\x1b[33m";
const red = "\x1b[31m";
const reset = "\x1b[0m";

const introError = `${yellow}VAST-BUILDER ${red}ERROR${yellow}:${reset}`;
const introWarning = `${yellow}VAST-BUILDER WARNING:${reset}`;

export function logError(error: string) {
  // tslint:disable-next-line:no-console
  console.error(`${introError} ${error}`);
}
export function logWarn(warning: string) {
  // tslint:disable-next-line:no-console
  console.warn(`${introWarning} ${warning}`);
}

export function warnOrThrow(
  msg: string,
  options: ErrorOptions,
  isError: boolean = false
) {
  if (options.logWarn) {
    if (isError) {
      logError(msg);
    } else {
      logWarn(msg);
    }
  }
  if (isError && options.throwOnError) {
    throw new Error(msg);
  }
}
