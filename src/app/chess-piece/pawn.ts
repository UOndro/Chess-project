import { ChessPiece } from './chess-piece'
import { Field } from 'app/chess-board/field'
export class Pawn extends ChessPiece {
    imagePath: string;
    player: string;
    firstMove: boolean;
    constructor(player: string) {
        super(player);
        this.firstMove = true;
        if (this.player == "black") {
            this.imagePath = '/assets/images/bP.png';
        }
        else {
            this.imagePath = '/assets/images/wP.png'
        }
    };
    move(id: number, field: Field, board: Field[]): boolean {
        var i = 8;
        if (this.player == "black") {
            i = i * (-1);
        }
        if ((field.id == id + i) && (field.getOb() == null)) { //move one field
            this.firstMove = false;
            return true;
        }
        else if ((this.firstMove) && (field.id == id + (i * 2)) && (field.getOb() == null) && (board[id+i-1].getOb()==null)) { // move 2 field
            this.firstMove = false;
            return true;
        }
        else if (((field.id == id + i + 1) || (field.id == id + i - 1)) && (field.getOb() != null) && (field.getOb().player != "white") && (this.player == "white")) { // kick for white
            this.firstMove = false;
            return true;
        }
        else if (((field.id == id + i + 1) || (field.id == id + i - 1)) && (field.getOb() != null) && (field.getOb().player != "black") && (this.player == "black")) { // kick for black
            this.firstMove = false;
            return true;
        }
    }
}
