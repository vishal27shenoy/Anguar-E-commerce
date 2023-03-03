import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data:any;
  itemarr=[];
  displaydata(){
    this.itemarr = this.data.flat(3);
    }
  ngOnInit(){ 

    this.displaydata();
}
}
