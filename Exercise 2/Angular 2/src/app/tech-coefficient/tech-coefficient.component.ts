import { GlobalVars } from './../global-vars';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-coefficient',
  templateUrl: './tech-coefficient.component.html',
  styleUrls: ['./tech-coefficient.component.css']
})
export class TechCoefficientComponent implements OnInit {
  rankValue1: number = 0;
  rankValue2: number = 0;
  rankValue3: number = 0;
  rankValue4: number = 0;
  rankValue5: number = 0;
  rankValue6: number = 0;
  rankValue7: number = 0;
  rankValue8: number = 0;
  rankValue9: number = 0;
  rankValue10: number = 0;
  rankValue11: number = 0;
  rankValue12: number = 0;
  rankValue13: number = 0;
  total : number = 0;
  constructor(public globalVars : GlobalVars) { }

  ngOnInit() {
  }
  ngDoCheck(){
    let sum = this.rankValue1*1
    +this.rankValue2*1
    +this.rankValue3*1
    +this.rankValue4*1
    +this.rankValue5*1
    +this.rankValue6*1
    +this.rankValue7*1
    +this.rankValue8*1
    +this.rankValue9*1
    +this.rankValue10*1
    +this.rankValue11*1
    +this.rankValue12*1
    +this.rankValue13*1
    ;
    this.total = 0.6 + 0.01*sum;
    this.globalVars.TCF = this.total;
    // this.globalVars.TCF = 5;
  }
}
