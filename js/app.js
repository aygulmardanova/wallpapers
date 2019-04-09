import {getWallPapersCount} from "./lib.js";

document.querySelector('#wallPapersCount-btn').addEventListener('click', setWpCount);

export function setWpCount() {

    let lengthInM = Number(document.getElementById("lengthInM").value);
    let widthInM = Number(document.getElementById("widthInM").value);
    let heightInM = Number(document.getElementById("heightInM").value);

    let wpCount = 0;
    if (lengthInM * widthInM * heightInM !== 0) {
        wpCount = getWallPapersCount(lengthInM, widthInM, heightInM);
    }

    document.getElementById("wpCount").innerHTML = wpCount;
}