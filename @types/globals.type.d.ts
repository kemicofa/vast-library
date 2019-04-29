interface ErrorOptions {
    logWarn?: boolean;
    throwOnError?: boolean;
}
interface CommonOptions extends ErrorOptions {
    cdata?: boolean;
    validateOnBuild?: boolean;
    spaces?: number;
}
interface VastBuilderOptions extends ErrorOptions, CommonOptions {
}
interface VastParserOptions extends ErrorOptions {
}
interface VastValidatorOptions extends ErrorOptions {
}
