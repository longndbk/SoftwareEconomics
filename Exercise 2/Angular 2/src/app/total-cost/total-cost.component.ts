import { Component, OnInit } from '@angular/core';
import { GlobalVars } from './../global-vars';
@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.css']
})
export class TotalCostComponent implements OnInit {
  G : number = 0 ;
  C : number = 0;
  TL : number = 0;
  GPM : number = 0;
  constructor(public globalVars : GlobalVars) { }

  ngOnInit() {
    let global = this.globalVars;
    this.G = 	1.4 *global.E * global.P * global.H;
    this.C = this.G * 0.65;
    this.TL = (this.G + this.C) * 0.06;
    this.GPM = this.G + this.C + this.TL;
  }

}
