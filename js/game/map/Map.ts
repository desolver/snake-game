import { Position } from "../../snake/movement/Position.js";

export class Map {
    private ID_ATTR: string = 'data-idx';

    constructor(public width: number, public height: number) { }

    initialize() {
        let tableInner = '';

        for (let i = 0; i < this.height; i++) {
            tableInner += `<tr ${this.ID_ATTR}='${i}'>`;

            for (let j = 0; j < this.width; j++) {
                tableInner += `<td ${this.ID_ATTR}='${j}' />`;
            }

            tableInner += '</tr>';
        }

        document.querySelector('#game-field').innerHTML = `<table><tbody>${tableInner}</tbody></table>`;
    }

    paintCell(position: Position, className: string) {
        this.getCell(position).classList.add(className);
    }

    clearCell(position: Position) {
        this.getCell(position).className = '';
    }

    private getCell(position: Position) {
        return document.querySelector(`tr[${this.ID_ATTR}='${position.y}'] > td[${this.ID_ATTR}='${position.x}']`);
    }
}