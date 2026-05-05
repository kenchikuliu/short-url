import { isValidUserUrl, normalizeUserUrl } from "./urlInput";

describe("url input helpers", () => {
  test("trims whitespace", () => {
    expect(normalizeUserUrl("  https://example.com/test  ")).toBe(
      "https://example.com/test"
    );
  });

  test("auto-prefixes https for plain domains", () => {
    expect(normalizeUserUrl("example.com/path")).toBe(
      "https://example.com/path"
    );
  });

  test("accepts normal user input", () => {
    expect(isValidUserUrl("example.com")).toBe(true);
    expect(isValidUserUrl("https://example.com")).toBe(true);
    expect(isValidUserUrl(" https://example.com ")).toBe(true);
  });

  test("rejects invalid values", () => {
    expect(isValidUserUrl("")).toBe(false);
    expect(isValidUserUrl("not a url")).toBe(false);
  });
});
