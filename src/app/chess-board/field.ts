import { ChessPiece } from 'app/chess-piece/chess-piece'
export class Field {
  id: number;
  style: string;
  top: number;
  right: number;
  chessPiece: ChessPiece;
  constructor(id, style, top, right, chessPiece) {
    this.id = id;
    this.style = style;
    this.top = top;
    this.right = right;
    this.chessPiece = chessPiece;

  }
  setOb(chessPiece) {
    this.chessPiece = chessPiece;
  }
  getOb() {
    return this.chessPiece;
  }
}
