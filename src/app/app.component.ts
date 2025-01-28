import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageServiceMode } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Aponta para o arquivo externo
  styleUrls: ['./app.component.scss'] // Você pode usar estilos separados aqui
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
