import {getWallPapersCount} from "./lib.js";

document.querySelector('#wallPapersCount-btn').addEventListener('click', setWpCount);

export function setWpCount() {

    const lengthInM = Number(document.getElementById("length-in-m").value);
    const widthInM = Number(document.getElementById("width-in-m").value);
    const heightInM = Number(document.getElementById("height-in-m").value);

    let wpCount = 0;
    if (lengthInM * widthInM * heightInM !== 0) {
        wpCount = getWallPapersCount(lengthInM, widthInM, heightInM);
    }

    document.getElementById("wpCount").innerHTML = wpCount;
}