import { Component, OnInit, Pipe } from '@angular/core';
import { Field } from './field'
import { Pawn, Rook, Bishop, Knight, Queen, King, ChessPiece } from 'app/chess-piece/importChessPieces';


@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})

export class ChessBoardComponent implements OnInit {
  board: Field[] = [];
  selectedField: Field;
  player: string = "white";
  select(fl: Field) {
    this.selectedField = fl;
    console.log(this.selectedField);
  }

  move(field: Field) {
    if ((this.selectedField == null) || (this.selectedField.getOb() == null)) {
      this.select(field);
    }
    else {
      var chessPiece: ChessPiece = this.selectedField.getOb();
      if ((this.player == chessPiece.player) && chessPiece.canMove(this.selectedField.id, field, this.board)) {
        field.setOb(this.selectedField.getOb());
        this.selectedField.setOb(null);
        this.selectedField = null;
        if (this.player == "white") this.player = "black";
        else this.player = "white";
      }
      else {
        this.selectedField = null;
      }
    }
  }
  constructor() { }

  ngOnInit() {
    this.setBoard();
    this.startPosition();
  }
  startPosition() {
    var fl: Field
    for (var i = 0; i < 64; i++) {
      fl = this.board[i];
      if ((i > 7) && (i < 16)) {
        fl.setOb(new Pawn("white"));
      }
      else if ((i <= 55) && (i >= 48)) {
        fl.setOb(new Pawn("black"));
      }
      else if ((i == 1) || (i == 6)) {
        fl.setOb(new Knight("white"));
      }
      else if ((i == 57) || (i == 62)) {
        fl.setOb(new Knight("black"));
      }
      else if ((i == 0) || (i == 7)) {
        fl.setOb(new Rook("white"));
      }
      else if ((i == 56) || (i == 63)) {
        fl.setOb(new Rook("black"));
      }
      else if ((i == 2) || (i == 5)) {
        fl.setOb(new Bishop("white"));
      }
      else if ((i == 58) || (i == 61)) {
        fl.setOb(new Bishop("black"));
      }
      else if ((i == 4)) {
        fl.setOb(new Queen("white"));
      }
      else if ((i == 59)) {
        fl.setOb(new Queen("black"));
      }
      else if ((i == 3)) {
        fl.setOb(new King("white"));
      }
      else if (i == 60) {
        fl.setOb(new King("black"));
      }
      console.log(this.board);
    }
  }
  setBoard() {
    var t = 0, r = 0, l = 12.5, d = 0;
    for (var i = 1; i <= 64; i++) {
      if ((d % 2) == 0) {
        if ((i % 2) == 1) {
          this.board.push(new Field(i, "black", t, r, null));
        }
        else {
          this.board.push(new Field(i, "white", t, r, null));
        }
      }
      else {
        if ((i % 2) == 0) {
          this.board.push(new Field(i, "black", t, r, null));
        }
        else {
          this.board.push(new Field(i, "white", t, r, null));
        }
      }
      if ((i % 8) == 0) {
        t += 12.5;
        r = 0;
        ++d;
      }
      else {
        r += l;
      }
    }
  }
}


