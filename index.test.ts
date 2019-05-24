import invertedColors from "./index";

test("should be a string", () => {
  expect(typeof invertedColors()).toBe("string");
});

test("should be reduce or none", () => {
  expect(["inverted", "none"].includes(invertedColors())).toBeTruthy();
});

test("should be reduce, none, or unknown", () => {
  expect(["inverted", "none", "unknown"].includes(invertedColors())).toBeTruthy();
});
