import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ActorService {
	servicesUrl: any;
	// httpRequestHeader: any;
	constructor(public http: Http) {
	}

    load() {   
	    // don't have the data yet
	    return new Promise(resolve => {
	      this.http.get("./assets/data.json")
	        .map(res => res.json())
	        .subscribe(data => {
						console.log(data)
	          resolve(data);
	        });
	    });
	}

}
