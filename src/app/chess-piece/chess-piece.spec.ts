import { Pawn, Rook, Bishop, Knight, Queen, King, ChessPiece } from 'app/chess-piece/importChessPieces';
import { Field } from 'app/chess-board/field';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
var whitePawn: Pawn, blackPawn: Pawn, whiteKing: King, blackKing: King, whiteRook: Rook, blackRook: Rook;
var whiteQueen: Queen, blackQueen: Queen, whiteBishop: Bishop, blackBishop: Bishop, whiteKnight: Knight, blackKnight: Knight;
var field: Field, fieldWithWhitePiece: Field, fieldWithBlackPiece: Field;
var board: Field[] = [];

beforeEach(() => {
    var t = 0, r = 0, l = 12.5, d = 0;
    for (var i = 1; i <= 64; i++) {
        if ((d % 2) == 0) {
            if ((i % 2) == 1) {
                board.push(new Field(i, "black", t, r, null));
            }
            else {
                board.push(new Field(i, "white", t, r, null));
            }
        }
        else {
            if ((i % 2) == 0) {
                board.push(new Field(i, "black", t, r, null));
            }
            else {
                board.push(new Field(i, "white", t, r, null));
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
    whitePawn = new Pawn("white");
    blackPawn = new Pawn("black");
    whiteKing = new King("white");
    blackKing = new King("black");
    whiteKnight = new Knight("white");
    blackKnight = new Knight("black");
    whiteQueen = new Queen("white");
    blackQueen = new Queen("black");
    whiteBishop = new Bishop("white");
    blackBishop = new Bishop("black");
    whiteRook = new Rook("white");
    blackRook = new Rook("black");
    field = new Field(30, "black", 0, 0, null);
    fieldWithWhitePiece = new Field(30, "black", 0, 0, whitePawn);
    fieldWithBlackPiece = new Field(30, "white", 0, 0, blackPawn);
})
describe('Pawn Move', () => {
    it('It should return true,if white pawn can move', () => {
        board[21].setOb(blackPawn);
        expect(whitePawn.move(14, field, board)).toBeFalsy(); //jumping over chess piece
        board[21].setOb(null);
        expect(whitePawn.move(14, field, board)).toBeTruthy(); //move two fields
        expect(whitePawn.move(22, field, board)).toBeTruthy(); //move one field
        expect(whitePawn.move(14, field, board)).toBeFalsy(); //move two fields
        expect(whitePawn.move(23, fieldWithWhitePiece, board)).toBeFalsy(); //kick your own chess-piece
        expect(whitePawn.move(22, fieldWithWhitePiece, board)).toBeFalsy(); //move on field where is already object
        expect(whitePawn.move(25, fieldWithWhitePiece, board)).toBeFalsy(); //move to wrong side
        expect(whitePawn.move(23, fieldWithBlackPiece, board)).toBeTruthy();  //kick enemy chess-piece
    })

    it('Should return true,if black pawn can move', () => {
        expect(blackPawn.move(46, field, board)).toBeTruthy(); //move two fields
        expect(blackPawn.move(38, field, board)).toBeTruthy(); //move one field
        expect(blackPawn.move(46, field, board)).toBeFalsy(); //move two fields
        expect(blackPawn.move(39, fieldWithBlackPiece, board)).toBeFalsy(); //kick your own chess-piece
        expect(blackPawn.move(38, fieldWithBlackPiece, board)).toBeFalsy(); //move on field where is already object
        expect(blackPawn.move(25, fieldWithBlackPiece, board)).toBeFalsy(); //move to wrong side
        expect(blackPawn.move(39, fieldWithWhitePiece, board)).toBeTruthy();  //kick enemy chess-piece
    })
})
describe('Knight move', () => {
    it('Should return true,if white Knight can move', () => {
        expect(whiteKnight.move(13, field)).toBeTruthy(); //move
        expect(whiteKnight.move(47, field)).toBeTruthy(); //move
        expect(whiteKnight.move(13, fieldWithWhitePiece)).toBeFalsy(); //kick your own chess-piece
        expect(whiteKnight.move(25, field)).toBeFalsy(); //move to wrong side
        expect(whiteKnight.move(13, fieldWithBlackPiece)).toBeTruthy();  //kick enemy chess-piece
    })
    it('Should return true,if black Knight can move', () => {
        expect(blackKnight.move(13, fieldWithWhitePiece)).toBeTruthy();  //kick enemy chess-piece
        expect(blackKnight.move(13, fieldWithBlackPiece)).toBeFalsy(); // kick your own
    })
})
describe('King move', () => {
    it('Should return true,if white King can move', () => {
        expect(whiteKing.move(22, field)).toBeTruthy(); //move
        expect(whiteKing.move(38, field)).toBeTruthy(); //move
        expect(whiteKing.move(23, field)).toBeTruthy(); //move
        expect(whiteKing.move(37, field)).toBeTruthy(); //move
        expect(whiteKing.move(21, fieldWithWhitePiece)).toBeFalsy(); //kick your own chess-piece
        expect(whiteKing.move(25, field)).toBeFalsy(); //move to wrong side
        expect(whiteKing.move(39, fieldWithBlackPiece)).toBeTruthy();  //kick enemy chess-piece
    })
    it('Should return true,if black King can move', () => {
        expect(blackKing.move(22, fieldWithWhitePiece)).toBeTruthy();  //kick enemy chess-piece
        expect(blackKing.move(23, fieldWithBlackPiece)).toBeFalsy(); // kick your own
    })
})
describe('Bishop move', () => {
    it('Should return true,if white Bishop can move', () => {
        board[20].setOb(blackPawn);
        expect(whiteBishop.move(12, field, board)).toBeFalsy(); //move
        board[20].setOb(null);
        expect(whiteBishop.move(12, field, board)).toBeTruthy(); //jumping over chess piece
        expect(whiteBishop.move(58, field, board)).toBeTruthy(); //move
        expect(whiteBishop.move(23, field, board)).toBeTruthy(); //move
        expect(whiteBishop.move(39, field, board)).toBeTruthy(); //move
        expect(whiteBishop.move(21, fieldWithWhitePiece, board)).toBeFalsy(); //kick your own chess-piece
        expect(whiteBishop.move(25, field, board)).toBeFalsy(); //move to wrong side
        expect(whiteBishop.move(51, fieldWithBlackPiece, board)).toBeTruthy();  //kick enemy chess-piece
    })
    it('Should return true,if black Bishop can move', () => {
        expect(blackBishop.move(44, fieldWithWhitePiece, board)).toBeTruthy();  //kick enemy chess-piece
        expect(blackBishop.move(27, fieldWithBlackPiece, board)).toBeFalsy(); // kick your own
    })
})
describe('Rook move', () => {
    it('Should return true,if white Rook can move', () => {
        board[21].setOb(blackPawn);
        expect(whiteRook.move(6, field, board)).toBeFalsy(); //move
        board[21].setOb(null);
        expect(whiteRook.move(6, field, board)).toBeTruthy(); //jumping over chess piece
        expect(whiteRook.move(26, field, board)).toBeTruthy(); //move
        expect(whiteRook.move(46, field, board)).toBeTruthy(); //move
        expect(whiteRook.move(31, field, board)).toBeTruthy(); //move
        expect(whiteRook.move(25, fieldWithWhitePiece, board)).toBeFalsy(); //kick your own chess-piece
        expect(whiteRook.move(33, field, board)).toBeFalsy(); //move to wrong side
        expect(whiteRook.move(54, fieldWithBlackPiece, board)).toBeTruthy();  //kick enemy chess-piece
    })
    it('Should return true,if black Rook can move', () => {
        expect(blackRook.move(62, fieldWithWhitePiece, board)).toBeTruthy();  //kick enemy chess-piece
        expect(blackRook.move(27, fieldWithBlackPiece, board)).toBeFalsy(); // kick your own
    })
})
describe('Queen move', () => {
    it('Should return true,if white Queen can move', () => {
        board[20].setOb(blackPawn);
        expect(whiteQueen.move(12, field, board)).toBeFalsy(); //move
        board[20].setOb(null);
        expect(whiteQueen.move(12, field, board)).toBeTruthy(); //jumping over chess piece
        expect(whiteQueen.move(58, field, board)).toBeTruthy(); //move
        expect(whiteQueen.move(23, field, board)).toBeTruthy(); //move
        expect(whiteQueen.move(39, field, board)).toBeTruthy(); //move
        expect(whiteQueen.move(21, fieldWithWhitePiece, board)).toBeFalsy(); //kick your own chess-piece
        expect(whiteQueen.move(1, field, board)).toBeFalsy(); //move to wrong side
        expect(whiteQueen.move(51, fieldWithBlackPiece, board)).toBeTruthy();  //kick enemy chess-piece
        board[21].setOb(blackPawn);
        expect(whiteQueen.move(6, field, board)).toBeFalsy(); //move
        board[21].setOb(null);
        expect(whiteQueen.move(6, field, board)).toBeTruthy(); //jumping over chess piece
        expect(whiteQueen.move(26, field, board)).toBeTruthy(); //move
        expect(whiteQueen.move(46, field, board)).toBeTruthy(); //move
        expect(whiteQueen.move(31, field, board)).toBeTruthy(); //move
        expect(whiteQueen.move(25, fieldWithWhitePiece, board)).toBeFalsy(); //kick your own chess-piece
        expect(whiteQueen.move(33, field, board)).toBeFalsy(); //move to wrong side
        expect(whiteQueen.move(54, fieldWithBlackPiece, board)).toBeTruthy();  //kick enemy chess-piece
    })
    it('Should return true,if black Queen can move', () => {
        expect(blackQueen.move(62, fieldWithWhitePiece, board)).toBeTruthy();  //kick enemy chess-piece
        expect(blackQueen.move(27, fieldWithBlackPiece, board)).toBeFalsy(); // kick your own
    })
})
