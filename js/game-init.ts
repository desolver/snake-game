import { Game } from "./game/Game.js";
import { Map } from "./game/map/Map.js";
import { Snake } from "./snake/Snake.js";

const snake = new Snake("Bobby", 5);
const map = new Map(15, 15);
const game = new Game(map, snake);

game.play();