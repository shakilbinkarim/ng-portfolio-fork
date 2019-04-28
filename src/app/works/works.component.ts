import { Component, OnInit, Input } from '@angular/core';
import { WorkComponent } from './work/work.component';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

//  workCard: WorkComponent;
//  @Input() workCard = new WorkComponent;

  constructor() { 
    // this.workCard.body = "asdasd";
    // this.workCard.link = "youtube.com";
    // this.workCard.imgsource = "/assets/img/dp.jpg";
    // this.workCard.title = "workmen";
  }

  ngOnInit() {
  }

}
