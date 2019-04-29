import { Component, OnInit, Input } from '@angular/core';
import { WorkComponent } from './work/work.component';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  columnSize:string = "col-md-4";

  constructor() { 
  }

  ngOnInit() {
  }

}
