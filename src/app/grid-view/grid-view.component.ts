import { Component, OnInit } from '@angular/core';
import { DynamicGrid } from '../grid.model';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  constructor() { }
  dynamicArray: Array<DynamicGrid> = [];
  index = 0;
  newDynamic: any = {};
  ngOnInit(): void {
     
  }
  addRow(index) {  
      this.newDynamic = {title1: "", title2: "",title3:""};
      this.dynamicArray.push(this.newDynamic);
      console.log(this.dynamicArray);
      return true;
  }
  
  deleteRow(index) {
      // if(this.dynamicArray.length ==1) {
      //     return false;
      // } else {
          this.dynamicArray.splice(index, 1);
          return true;
      //}
  }

}
