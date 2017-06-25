import { ChessPiece } from './chess-piece';
import { Field } from 'app/chess-board/field';

export class King extends ChessPiece {
    imagePath: string;
    player: string;
    constructor(player) {
        super(player);
        if (this.player == "black") {
            this.imagePath = '/assets/images/bK.png';
        }
        else {
            this.imagePath = '/assets/images/wK.png'
        }
    };
    move(id: number, field: Field): boolean {
        var i: number = field.id;
        if (field.getOb() != null) {
            if (this.player == field.getOb().player) {
                return false;
            }
        }
        if ((i == id + 1) || (i == id - 1) || (i == id + 8) || (i == id - 8) || (i == id - 7) || (i == id + 7) || (i == id + 9) || (i == id - 9)) {
            return true;
        }
    }
}
