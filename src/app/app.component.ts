import { Component } from '@angular/core';
//輸入class
//裝飾器
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
//輸出class
export class AppComponent {
  title = 'app works!';
}