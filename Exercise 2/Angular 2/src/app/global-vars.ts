import {Injectable} from '@angular/core';

@Injectable()
export class GlobalVars {
    TAW : number = 0;
    TBF : number = 0;
    UUCP : number = 0;
    TCF : number = 0 ; 
    EF: number = 0;
    AUCP : number = 0;
    P : number = 0;
    E: number = 0;
    H : number = 0;
    G : number = 0;
    constructor(){
        
        
    }
    ngDoCheck(){
        // this.UUCP = this.TAW + this.TBF;
        // console.log(this.TAW +" " + this.TBF +" " +  this.UUCP)
        // this.AUCP = this.UUCP * this.TCF * this.EF;
        // this.E = 10/6 * this.AUCP;
    }
}