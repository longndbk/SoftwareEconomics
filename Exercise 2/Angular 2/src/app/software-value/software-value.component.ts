import { GlobalVars } from './../global-vars';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-value',
  templateUrl: './software-value.component.html',
  styleUrls: ['./software-value.component.css']
})
export class SoftwareValueComponent implements OnInit {
  TAW: number;
  TBF: number;
  UUCP: number;
  TCF: number;
  EF: number;
  AUCP: number;
  P: number;
  E: number;
  H: number = 0;
  G: number;
  constructor(public globalVars: GlobalVars) {
    
    
  }

  ngOnInit() {
    
    // console.log(this.globalVars)
    
  }
  ngDoCheck(){
    this.TAW = this.globalVars.TAW;
    this.TBF = this.globalVars.TBF;

    this.UUCP = this.TAW + this.TBF;
    this.globalVars.UUCP = this.UUCP;

    this.TCF = this.globalVars.TCF; 

    this.EF = this.globalVars.EF;

    this.AUCP = this.UUCP * this.TCF * this.EF;
    this.globalVars.AUCP = this.AUCP;
    // console.log(this.UUCP)
    // this.P = this.H / this.AUCP;
    this.P = this.globalVars.P;
    this.globalVars.P = this.P;

    this.E = 10/6 * this.AUCP;
    this.globalVars.E = this.E;
    
    this.globalVars.H = this.H;

    this.G = 1.4 * this.E * this.P * this.H;
    this.globalVars.G = this.G;
    
  }

}
