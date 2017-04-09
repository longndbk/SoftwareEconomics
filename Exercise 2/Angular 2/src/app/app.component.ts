import { TotalCostComponent } from './total-cost/total-cost.component';
import { TechCoefficientComponent } from './tech-coefficient/tech-coefficient.component';
import { SoftwareValueComponent } from './software-value/software-value.component';
import { EnviromentCoefficientComponent } from './enviroment-coefficient/enviroment-coefficient.component';
import { ActorService } from './../providers/actor-service';
// import { Http} from '@angular/http';
import { Component } from '@angular/core';
import { ActorComponent } from './actor/actor.component';
import { UseCaseComponent } from './use-case/use-case.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers : [ActorService]
})
export class AppComponent {
  title = 'app works!';
  data : any;
  header : any;
  // constructor(public http: Http, public actorService : ActorService){
  //   let that = this;
  //   this.actorService.load().then(data => {
  //       that.data = Object.assign({},data);
  //       // Object.assign(that.data,data);
  //       console.log(that.data.table_name)
  //   });
  // }
  ngOnInit(){
    
    // this.header = this.data.
  }
}
