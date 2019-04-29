import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email:string = "shakilbin@gmail.com";
  emailCap:string = "shakilbin@gmail.com";
  twitter:string = "https://twitter.com/ShakilBin";
  twitterCap:string = "@shakilbin";
  linkedIn:string = "https://www.linkedin.com/in/shakil-bin-karim-89b0ba83/";
  linkedInCap:string = "/in/shakilbinkarim";
  gitHub:string = "https://github.com/shakilbinkarim";
  gitHubCap:string = "/shakilbinkarim";


  constructor() { }

  ngOnInit() {
  }

}
