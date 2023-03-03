import { Component,OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() searchDatafromnavbar :EventEmitter<any> = new EventEmitter();
  sendDatatoApp(val:any){
    this.searchDatafromnavbar.emit(val);
  }
}
