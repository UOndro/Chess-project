import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {
 board:any=[];
styl= "black";
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
        this.board.push(new Field(i,"white",this.t,this.r,new Pawn));
      }
      if((i%8)==0){
         this.t+=12.5;
         this.l=this.l*(-1);
      }
      else{ 
        this.r+=this.l;
      }
     
    }
  console.info(this.board);
  }
  
}
class Field {
    id: number;
    styl: string;
    t: number;
    r:number;
    ob: any;
    constructor(id, styl,t,r,ob){
        this.id = id;
        this.styl = styl;
        this.t=t;
        this.r=r;
        this.ob=ob;
    }
}
class Pawn{
    URL;
    constructor(){
      this.URL="bP.png"
    };
}