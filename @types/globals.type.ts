interface ErrorOptions {
  logWarn?: boolean;
  throwOnError?: boolean;
}

interface BuilderOptions extends ErrorOptions {
  cdata?: boolean;
  validateOnBuild?: boolean; // TODO check if it's a problem
  spaces?: number; // TODO replace by indentSpaceNumber
}

interface ParserOptions extends BuilderOptions {}
