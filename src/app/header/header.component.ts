import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle = '!The Will Will Web!';
  pageH3 = '0806 AngularJS DEMO';
  pageTitleLink = 'http://blog.miniasp.com/';
  constructor() { }

  ngOnInit() {
  }

}
