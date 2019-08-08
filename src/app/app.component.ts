import { Component,OnInit } from '@angular/core';
import * as Papa from 'papaparse';

let obj : AppComponent;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  implements OnInit{
  name = 'RaboBank Issue Report';
  dataList : any[];


  ngOnInit(){
    obj = this;
  }
  onChange(files: File[]){
    
    if(files[0]){
      console.log(files[0]);
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (result,file) => {
          console.log(result);
          this.dataList = result.data;
        }
      });
    }
  }
}
