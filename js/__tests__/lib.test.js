import {getWallPapersCount} from "../lib.js";

test("calculated wallpapers count should be close to", () => {
    const lengthInM = 5;
    const widthInM = 6;
    const heightInM = 2.75;

    const expectedCloseTo = 5.9;

    const result = getWallPapersCount(lengthInM, widthInM, heightInM);

    expect(result).toBeCloseTo(expectedCloseTo, 1);
});