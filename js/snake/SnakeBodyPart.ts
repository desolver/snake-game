import { Position } from "./movement/Position.js";

export class SnakeBodyPart {
    public Position: Position;
    public PreviousPosition: Position;

    constructor(public IsHead: boolean = false) {
        this.Position = new Position(0, 0);
        this.PreviousPosition = new Position(0, 0);
    }

    move(newPosition: Position) {
        this.PreviousPosition = this.Position;
        this.Position = newPosition;
    }
}