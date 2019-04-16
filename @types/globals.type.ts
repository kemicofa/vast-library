interface ErrorOptions {
  logWarn?: boolean;
  throwOnError?: boolean;
}

interface CommonOptions extends ErrorOptions {
  cdata?: boolean;
  validateOnBuild?: boolean; // TODO check if it's a problem
  spaces?: number; // TODO replace by indentSpaceNumber
}

interface VastBuilderOptions extends CommonOptions {}
interface VastParserOptions extends CommonOptions {}
interface VastValidatorOptions extends CommonOptions {}
