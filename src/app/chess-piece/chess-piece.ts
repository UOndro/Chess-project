import { Field } from 'app/chess-board/field'
export abstract class ChessPiece {
    player: string;

    constructor(player: string) {
        this.player = player;
    };

    public canMove(id: number, field: Field, board: Field[]): boolean {
        if (this.move(id, field, board)) {
            return true;
        }
    };
    abstract move(id: number, field: Field,board: Field[]): boolean;
}
