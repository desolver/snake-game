import { Snake } from "../../snake/Snake.js";
import { Map } from "./Map.js";

export class MapPainter {
    static paint(map: Map, snake: Snake) {
        for (const part of snake.BodyParts) {
            map.clearCell(part.PreviousPosition);

            const className = part.IsHead
                ? 'snake-head'
                : 'snake-body';

            map.paintCell(part.Position, className);
        }
    }
}