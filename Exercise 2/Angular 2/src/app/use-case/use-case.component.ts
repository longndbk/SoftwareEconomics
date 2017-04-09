import { GlobalVars } from './../global-vars';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-case',
  templateUrl: './use-case.component.html',
  styleUrls: ['./use-case.component.css']
})
export class UseCaseComponent implements OnInit {
  total : number = 0;
  caseNumber1 : number = 0;
  caseNumber2 : number = 0;
  caseNumber3 : number = 0;
  caseNumber4 : number = 0;
  caseNumber5 : number = 0;
  caseNumber6 : number = 0;
  caseNumber7 : number = 0;
  caseNumber8 : number = 0;
  caseNumber9 : number = 0;
  constructor(public globalVars : GlobalVars) { }

  ngOnInit() {
  }
  ngDoCheck(){
    this.total = 
      this.caseNumber1*5
    + this.caseNumber2*10
    + this.caseNumber3*15
    + this.caseNumber4*5*1.2
    + this.caseNumber5*10*1.2
    + this.caseNumber6*15*1.2
    + this.caseNumber7*5*1.5
    + this.caseNumber8*10*1.5
    + this.caseNumber9*15*1.5
    ;
    this.globalVars.TBF = this.total;
    // this.globalVars.TBF = 4;
  }
}
