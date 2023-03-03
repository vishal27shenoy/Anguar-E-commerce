import { Component } from '@angular/core';
import * as data from '../assets/API.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  itemarr:any =  Object.values(data).map(function(val){
    let arr = [val];
    return arr;
});
  searchDatafromnavbar(val : string){
    console.log("hello",val)
    console.log(this.itemarr)
  }
}
