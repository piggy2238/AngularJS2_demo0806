import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle = '!The Will Will Web!';
  pageH3 = '記載著<strong>will</strong>保哥的學習過程';
  pageTitleLink = 'http://blog.miniasp.com/';
  pageIcon1Lick = 'https://www.facebook.com/will.fans';

  num = 1;
  constructor() { }

  ngOnInit() {
  }

  plus(event: MouseEvent){
      console.log(event);//從這邊得到物件類別
        this.num++;
  }

}
