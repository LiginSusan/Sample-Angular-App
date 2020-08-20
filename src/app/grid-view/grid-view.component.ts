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
  newDynamic: DynamicGrid;
  selectedRowObject: DynamicGrid={jobCode: "", itemCode: "",description:"",notes: "", unit: "",charge:"",costcenter: "",amount:""};
  ngOnInit(): void {
     
  }
  addRow(index) {  
      this.newDynamic = {jobCode: "", itemCode: "",description:"",notes: "", unit: "",charge:"",costcenter: "",amount:""};
      this.dynamicArray.push(this.newDynamic);
      console.log(this.dynamicArray);
      return true;
  }
  
  deleteRow(index) {
    this.dynamicArray.splice(index, 1);
    return true;
  }

  openNav(gridRow) {
    this.selectedRowObject = gridRow;
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

}
