const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an array", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);

    expect(Array.isArray(shuffledArray)).toBe(true);
  })
  // Test case 2: Check that it returns an array of the same length as the argument sent in
  test("return an array of the same length", () => {
    const originalArray = [10, 20, 30, 40, 50];
    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray.length).toBe(originalArray.length);
  });

});
