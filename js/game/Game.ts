import { Map } from "./map/Map.js";
import { Snake } from "../snake/Snake.js";
import { Timer } from "./Timer.js";
import { MoveDirection } from "../snake/movement/Directions.js";
import { MapPainter } from "./map/MapPainter.js";

export class Game {
    private timer: Timer;

    constructor(public map: Map, public snake: Snake)
    {
        document.addEventListener("keydown", e => this.onPressKey(e, snake));
        this.timer = new Timer(500, 100000, () => this.gameTick(map, snake));
    }

    play() {
        this.timer.start();
        this.map.initialize();
    }

    private gameTick(map: Map, snake: Snake) {
        snake.move();
        MapPainter.paint(map, snake);
    }

    private onPressKey(e: KeyboardEvent, snake: Snake) {
        const pressedButtonName = e.key;

        switch (pressedButtonName) {
            case 'ArrowUp':
                snake.turn(MoveDirection.Up);
                break;

            case 'ArrowDown':
                snake.turn(MoveDirection.Down);
                break;

            case 'ArrowLeft':
                snake.turn(MoveDirection.Left);
                break;
            
            case 'ArrowRight':
                snake.turn(MoveDirection.Right);
                break;

            default: return;
        }

        console.log('Смена направления по кнопке ' + e.key);
    }
}

