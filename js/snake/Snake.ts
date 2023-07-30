import { MoveDirection } from "./movement/Directions.js";
import { Food } from "./Food.js";
import { SnakeBodyPart } from "./SnakeBodyPart.js";
import { DirectionHelper } from "../helpers/DirectionHelper.js";

export class Snake {
    public BodyParts: SnakeBodyPart[];
    private moveDirection: MoveDirection;

    constructor(public name: string, bodyPartsCount: number) {
        this.BodyParts = [];
        for (let i = 0; i < bodyPartsCount; i++) {
            this.BodyParts.push(new SnakeBodyPart(i === 0));
        }

        this.moveDirection = MoveDirection.Down;
    }

    move() {        
        const head = this.getHead();
        const newPosition = DirectionHelper.calculateNewPosition(head.Position, this.moveDirection);
        head.move(newPosition);

        for (let i = 1; i < this.BodyParts.length; i++) {
            const previousPart = this.BodyParts[i - 1];
            const part = this.BodyParts[i];

            part.move(previousPart.PreviousPosition);
        }
    }

    turn(newDirection: MoveDirection) {
        this.moveDirection = DirectionHelper.calculateDirection(this.moveDirection, newDirection);
    }

    eat(food: Food) : void {

    }

    private getHead() {
        return this.BodyParts[0];
    }
}