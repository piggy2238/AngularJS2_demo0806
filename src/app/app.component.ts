import { Component } from '@angular/core';
import { HeaderComponent } from './header';

//輸入class
//裝飾器
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[HeaderComponent]
  // 使用directives 子元件
})
//輸出class
export class AppComponent {
  title = 'app works!';
}
