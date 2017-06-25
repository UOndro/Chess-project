import { ChessPiece } from './chess-piece';
import { Field } from 'app/chess-board/field';

export class Queen extends ChessPiece {
    move(id: number, field: Field, board: Field[]): boolean {
        var i: number = field.id, k: number, l: number;
        if (field.getOb() != null) {
            if (this.player == field.getOb().player) {
                return false;
            }
        }
        if (id < i) {
            if (((i - id) % 7) == 0) k = l = 7;
            else if (((i - id) % 9) == 0) k = l = 9;
            else if (((i - id) % 8) == 0) k = l = 8;
            else k = l = 1;
        }
        else {
            if (((i - id) % 7) == 0) k = l = -7;
            else if (((i - id) % 9) == 0) k = l = -9;
            else if (((i - id) % 8) == 0) k = l = -8;
            else k = l = -1;
        }
        if (((k % 7) == 0) || ((k % 9) == 0) || ((k % 8) == 0)) {
            for (var j = 1; j <= 8; j++) {
                if (id + k == i) return true;
                else if (board[id + k - 1].getOb() != null) {
                    return false;
                }
                k += l;
            }
        }
        else {
            var m: number = j = (board[id - 1].id - 1) / 8;
            for (j = ((board[id + k - 1].id - 1) / 8); Math.floor(j) == Math.floor(m); j = ((board[id + k - 1].id - 1) / 8)) {
                if (id + k == i) return true;
                else if (board[id + k - 1].getOb() != null) {
                    return false;
                }
                k += l;
            }
        }
    }
    imagePath: string;
    player: string;

    constructor(player) {
        super(player);
        if (this.player == "black") {
            this.imagePath = '/assets/images/bQ.png';
        }
        else {
            this.imagePath = '/assets/images/wQ.png'
        }
    };
}
