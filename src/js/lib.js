export function getWallPapersCount(lengthInM, widthInM, heightInM) {
    const wpWidthInM = 1.06;
    const wpLengthInM = 10;

    const perimeterInM = 2 * lengthInM + 2 * widthInM;

    let wpLines = perimeterInM / wpWidthInM;
    let wpLinesInOneRoll = wpLengthInM / (heightInM + 0.1);

    return wpLines / wpLinesInOneRoll;
}