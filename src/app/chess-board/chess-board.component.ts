import { Component, OnInit,Pipe } from '@angular/core';
@Pipe({
  name: 'mapToArray'
})
export class MapToArrayPipe {
  public transform(map: any): any[] {
    if (!map) return [];
    return Object.keys(map).map(k => map[k]);
  }
}

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {
 board:any=[];
 selectedField: Field;
 select(fl: Field){
    this.selectedField = fl;
    console.log(this.selectedField);
 }
  constructor() { }
  t=0;
  r=0;
  l=12.5;
  ngOnInit() {
    for(var i = 1; i<=64;i++){
      if((i%2)==1 ){
        this.board.push(new Field(i,"black",this.t,this.r,null));
      }
      else{
        this.board.push(new Field(i,"white",this.t,this.r,null));
      }
      if((i%8)==0){
         this.t+=12.5;
         this.l=this.l*(-1);
      }
      else{ 
        this.r+=this.l;
      }
   
    }
    var fl:Field
    for(var i = 0; i<64;i++){
     fl= this.board[i];
      if((i>7) && (i<16)){
        fl.setOb(new Pawn("white"));
      }
      else if((i<=55)&&(i>=48)){
        fl.setOb(new Pawn("black"));
      }
      else if((i==1)||(i==6)){
        fl.setOb(new Knight("white"));
      }
     else if((i==57)||(i==62)){
       fl.setOb(new Knight("black"));
     }
     else if((i==0)||(i==7)){
        fl.setOb(new Rook("white"));
      }
     else if((i==56)||(i==63)){
       fl.setOb(new Rook("black"));
     }
     else if((i==2)||(i==5)){
        fl.setOb(new Bishop("white"));
      }
     else if((i==58)||(i==61)){
       fl.setOb(new Bishop("black"));
     }
     else if((i==3)){
        fl.setOb(new Queen("white"));
      }
     else if((i==60)){
       fl.setOb(new Queen("black"));
     }
     else if((i==4)){
        fl.setOb(new King("white"));
      }
     else if(i==59){
       fl.setOb(new King("black"));
     }
     console.log(this.board);
    }
  }
  //start(){
  
    
  //}
}
class Field {
    id: number;
    styl: string;
    t: number;
    r:number;
    ob: Object;
    constructor(id, styl,t,r,ob){
        this.id = id;
        this.styl = styl;
        this.t=t;
        this.r=r;
        this.ob=ob;
    }
    setOb(ob){
      this.ob=ob;
    }
    getOb(){
      return this.ob;
    }
}
class Pawn{
     imagePath:string;
     pl:string;
    constructor(pl){
      this.pl=pl;

      if(this.pl == "black"){
      this.imagePath='/assets/images/bP.png';
    }
    else{
      this.imagePath='/assets/images/wP.png'
    }
    };  
}
class Knight{
     imagePath:string;
     pl:string;
    constructor(pl){
      this.pl=pl;

      if(this.pl == "black"){
      this.imagePath='/assets/images/bN.png';
    }
    else{
      this.imagePath='/assets/images/wN.png'
    }
    };  
}
class Rook{
     imagePath:string;
     pl:string;
    constructor(pl){
      this.pl=pl;

      if(this.pl == "black"){
      this.imagePath='/assets/images/bR.png';
    }
    else{
      this.imagePath='/assets/images/wR.png'
    }
    };  
}
class Bishop{
     imagePath:string;
     pl:string;
    constructor(pl){
      this.pl=pl;

      if(this.pl == "black"){
      this.imagePath='/assets/images/bB.png';
    }
    else{
      this.imagePath='/assets/images/wB.png'
    }
    };  
}
class King{
     imagePath:string;
     pl:string;
    constructor(pl){
      this.pl=pl;

      if(this.pl == "black"){
      this.imagePath='/assets/images/bK.png';
    }
    else{
      this.imagePath='/assets/images/wK.png'
    }
    };  
}
class Queen{
     imagePath:string;
     pl:string;
    constructor(pl){
      this.pl=pl;

      if(this.pl == "black"){
      this.imagePath='/assets/images/bQ.png';
    }
    else{
      this.imagePath='/assets/images/wQ.png'
    }
    };  
}
