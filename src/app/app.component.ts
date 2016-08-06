import { Component } from '@angular/core';
import { HeaderComponent } from './header';

//輸入class
//裝飾器
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[HeaderComponent]
})
//輸出class
export class AppComponent {
  title = 'app works!';
}
