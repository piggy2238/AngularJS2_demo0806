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

  textInput = "您並未輸入任何東西";

  doSearch(evet: KeyboardEvent){

        //1.event.target 就是input的DOM
        //因event target的檔案類別能用的東西很少,所以要轉型
         var input = evet.target as HTMLInputElement;
         console.log(input.value);//確認資料有抓到也可以輸出
         console.log(event);
         //現在要確定按enter才會輸出
         //用enter的unitcode去設定
          if(event.keyCode == 13){
              this.textInput = input.value;

          }


  }
}
