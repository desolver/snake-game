import { MoveDirection } from "../snake/movement/Directions.js";
import { Position } from "../snake/movement/Position.js";

export class DirectionHelper {
    static calculateDirection(oldDirection: MoveDirection, newDirection: MoveDirection) : MoveDirection {
        const isOpposite: boolean = oldDirection === MoveDirection.Down && newDirection === MoveDirection.Up
            || oldDirection === MoveDirection.Up && newDirection === MoveDirection.Down
            || oldDirection === MoveDirection.Left && newDirection === MoveDirection.Right
            || oldDirection === MoveDirection.Right && newDirection === MoveDirection.Left;
        
        if (isOpposite) {
            return oldDirection;
        }

        return newDirection;
    }
    
    static calculateNewPosition(currentPosition: Position, moveDirection: MoveDirection) : Position {
        switch (moveDirection) {
            case MoveDirection.Down:
                return new Position(currentPosition.x, currentPosition.y + 1);

            case MoveDirection.Up:
                return new Position(currentPosition.x, currentPosition.y - 1);
            
            case MoveDirection.Left:
                return new Position(currentPosition.x - 1, currentPosition.y);

            default:
                return new Position(currentPosition.x + 1, currentPosition.y);
        }
    }
}