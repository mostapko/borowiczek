import { Component } from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    let htmlEl = document.querySelector('html');
    if (htmlEl) {
      htmlEl.lang = translate.currentLang;
    }
  }

  title = 'borowiczek';
}
