interface ErrorOptions {
  logWarn?: boolean;
  throwOnError?: boolean;
}

interface CommonOptions extends ErrorOptions {
  cdata?: boolean;
  validateOnBuild?: boolean; // TODO check if it's a problem
  spaces?: number; // TODO replace by indentSpaceNumber
}

interface BuilderOptions extends CommonOptions {}
interface ParserOptions extends CommonOptions {}
interface ValidatorOptions extends CommonOptions {}
