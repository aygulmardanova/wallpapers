import {getWallPapersCount} from "./lib.js";

export function getWpCount() {

    let lengthInM = Number(document.getElementById("lengthInM").value);
    let widthInM = Number(document.getElementById("widthInM").value);
    let heightInM = Number(document.getElementById("heightInM").value);

    let wpCount =
        lengthInM * widthInM * heightInM !== 0
            ? getWallPapersCount(lengthInM, widthInM, heightInM)
            : 0;

    console.log(wpCount + ' rolls of wallpapers for a room with length ' + lengthInM + ' and width ' + widthInM);
    document.getElementById("wpCount").innerHTML = wpCount;
    return wpCount;
}

{
    let lengthInM = 5;
    let widthInM = 6;
    let heightInM = 2.75;
    const wpCount = getWallPapersCount(lengthInM, widthInM, heightInM);
    console.log(wpCount + ' rolls of wallpapers for a room with length ' + lengthInM + ' and width ' + widthInM);
}
