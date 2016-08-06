import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle = '!The Will Will Web!';
  //要有一個屬性去接可以去接外部傳入的資料
  @Input()
    pageH3:string;



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
