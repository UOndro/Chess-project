import { ChessPiece } from './chess-piece';
import { Field } from 'app/chess-board/field';

export class Bishop extends ChessPiece {
    move(id: number, field: Field, board: Field[]): boolean {
        var i: number = field.id;
        var k: number, l: number;
        if (field.getOb() != null) {
            if (this.player == field.getOb().player) {
                return false;
            }
        }
        if (id < i) {
            if (((i - id) % 7) == 0) k = l = 7;
            else k = l = 9;
        }
        else {
            if (((i - id) % 7) == 0) k = l = -7;
            else k = l = -9;
        }
        for (var j = 1; j <= 8; j++) {
            if (id + k == i) return true;
            else if (board[id + k - 1].getOb() != null) {
                return false;
            }
            k += l;
        }
    }

    imagePath: string;
    player: string;
    constructor(player) {
        super(player);
        if (this.player == "black") {
            this.imagePath = '/assets/images/bB.png';
        }
        else {
            this.imagePath = '/assets/images/wB.png'
        }
    };
}
