import {getWallPapersCount} from "./lib.js";
import {getWallPapersCount} from "./lib";

document.querySelector('#wallPapersCount-btn').addEventListener('click', setWpCount);

export function setWpCount() {

    let lengthInM = Number(document.getElementById("lengthInM").value);
    let widthInM = Number(document.getElementById("widthInM").value);
    let heightInM = Number(document.getElementById("heightInM").value);

    document.getElementById("wpCount").innerHTML = lengthInM * widthInM * heightInM !== 0
        ? getWallPapersCount(lengthInM, widthInM, heightInM)
        : 0;
}