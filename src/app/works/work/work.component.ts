import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: []
})
export class WorkComponent implements OnInit {
  title: String = "dsa";
  body: String = "adssdad";
  link: String = "";
  @Input()
  imgsource: String;


  constructor() {
  }
  // constructor(cardTitle: String, cardBody: String, cardLink: String, cardImgSource: String) {
  //   this.title = cardTitle;
  //   this.body = cardBody;
  //   this.link = cardLink;
  //   this.imgsource = cardImgSource;
  // }

  ngOnInit() {
  }

}
