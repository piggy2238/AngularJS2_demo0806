import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //範本變數的方法 要多一個input的變數
  doSearch(evet:KeyboardEvent, input:HTMLInputElement){
         if(event.keyCode == 13){
              this.textInput = input.value;
          }
  }

}
