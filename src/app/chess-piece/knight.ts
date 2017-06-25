import { ChessPiece } from './chess-piece';
import { Field } from 'app/chess-board/field';

export class Knight extends ChessPiece {

    imagePath: string;
    constructor(player: string) {
        super(player);

        if (this.player == "black") {
            this.imagePath = '/assets/images/bN.png';
        }
        else {
            this.imagePath = '/assets/images/wN.png';
        }
    };
    move(id: number, field: Field): boolean {
        var i: number = field.id;
        if (field.getOb() != null) {
            if (this.player == field.getOb().player) {
                return false;
            }
        }
        if ((i == id + 10) || (i == id - 10) || (i == id + 6) || (i == id - 6) || (i == id - 15) || (i == id + 15) || (i == id + 17) || (i == id - 17)) {
            return true;
        }
    }
}

