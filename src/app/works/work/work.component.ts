import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  @Input('title') title: String;
  @Input('body') body: String;
  @Input('link') link: String;
  @Input('imgsrc') imgsource: String;


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
