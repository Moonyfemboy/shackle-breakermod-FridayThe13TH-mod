import Player from "./player.js";
import Controller from "./controller.js";
import MiniMap from "./miniMap.js";

export let player;
export let miniMap;
export let controller;

document.getElementById('audio-player').src = "./audio/a-sinister-power-rising-epic-dark-gothic-soundtrack-15021.mp3";
document.getElementById('audio-player').play();

document.getElementById('title-start-button').addEventListener("click", ()=>{
    player = new Player();
    miniMap = new MiniMap();
    controller = new Controller();
    document.getElementById("title-screen").style.display = "none";
    document.getElementById("app").style.display = "block";
});