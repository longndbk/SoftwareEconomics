import { GlobalVars } from './../global-vars';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enviroment-coefficient',
  templateUrl: './enviroment-coefficient.component.html',
  styleUrls: ['./enviroment-coefficient.component.css']
})
export class EnviromentCoefficientComponent implements OnInit {
  EF : number = 0;
  ES : number = 0;
  P : number = 0;
  // ES: string = "Chua lam xong";
  // P : string = "Chua lam xong";
  rankValue1 : number = 0; 
  rankValue2 : number = 0; 
  rankValue3 : number = 0; 
  rankValue4 : number = 0; 
  rankValue5 : number = 0; 
  rankValue6 : number = 0; 
  rankValue7 : number = 0; 
  rankValue8 : number = 0; 
  
  constructor(public globalVars : GlobalVars) { }

  ngOnInit() {
  }
  ngDoCheck(){
    let sum = this.rankValue1*1 +
     this.rankValue2*1 +
     this.rankValue3*1 +
     this.rankValue4*1 +
     this.rankValue5*1 +
     this.rankValue6*1 +
     this.rankValue7*1 +
     this.rankValue8*1 ;
    this.EF = 1.4 + (-0.03 * sum );
    let arr_sum = [this.rankValue1, this.rankValue2, this.rankValue3, this.rankValue4, this.rankValue5, this.rankValue6,
     this.rankValue7, this.rankValue8];
    let arr_noisuy = [0,0,0,0,0,0,0,0]
    for(let i = 0; i < 8; i++){
      if(arr_sum[i] >3){
        arr_noisuy[i] = 1;
      }
      else if(arr_sum[i] > 2 && arr_sum[i] <= 3){
        arr_noisuy[i] = 0.6;
      }
      else if(arr_sum[i] > 1 && arr_sum[i] <= 2){
        arr_noisuy[i] = 0.1;
      }
      else if(arr_sum[i] > 0 && arr_sum[i] <= 1){
        arr_noisuy[i] = 0.05;
      }
      else{
        arr_noisuy[i] = 0;
      }
    }
    var sum_noisuy = 0;
    for(let i = 0; i < 8; i++){
        sum_noisuy += arr_noisuy[i];
    }
    this.ES = sum_noisuy;
    var thoigianlaodong;
    if(sum_noisuy >= 3){
      thoigianlaodong = 20;
    }
    else if(sum_noisuy >=1 && sum_noisuy < 3){
      thoigianlaodong = 32;
    }
    else{
      thoigianlaodong = 48;
    }
    this.P = thoigianlaodong;
    this.globalVars.P = this.P;
    this.globalVars.EF = this.EF;
    // this.globalVars.EF = 3;
  }

}
