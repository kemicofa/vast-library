// tslint:disable:no-console
import { logError, logWarn, warnOrThrow } from "../../src/utils/logs";

describe("logs", () => {
  const logWarnMock = jest.fn();
  const logErrorMock = jest.fn();

  beforeEach(() => {
    console.warn = logWarnMock;
    console.error = logErrorMock;
  });

  afterEach(() => {
    logWarnMock.mockClear();
    logErrorMock.mockClear();
  });

  describe("logWarn / logError", () => {
    test("should log warn correctly", () => {
      logWarn("anything");

      expect(logWarnMock).toBeCalledWith(expect.stringMatching(/anything/));
    });
    test("should log error correctly", () => {
      logError("anything");

      expect(logErrorMock).toBeCalledWith(expect.stringMatching(/anything/));
    });
  });

  describe("warnOrThrow", () => {
    test("should log messages in correct channels", () => {
      warnOrThrow("anything", { logWarn: true });

      expect(logWarnMock).toBeCalledWith(expect.stringMatching(/anything/));
    });
    test("should log messages in correct channels", () => {
      warnOrThrow("anything", { logWarn: true }, true);

      expect(logErrorMock).toBeCalledWith(expect.stringMatching(/anything/));
    });
    test("should log messages in correct channels", () => {
      expect(() => {
        warnOrThrow("anything", { throwOnError: true });
      }).not.toThrow();
    });
    test("should log messages in correct channels", () => {
      expect(() => {
        warnOrThrow("anything", { throwOnError: true }, true);
      }).toThrow(/anything/);
    });
  });
});
