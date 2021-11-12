import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  constructor( public translate: TranslateService) {   
    translate.addLangs(['en', 'sp']);  
      if (localStorage.getItem('locale')) {  
        const browserLang = localStorage.getItem('locale');  
        translate.use(browserLang.match(/en|sp/) ? browserLang : 'en');
      }  
  }
  
 
  ngOnInit() {
    
  }
  changeLang(language: string) {  
    localStorage.setItem('locale', language);  
    this.translate.use(language);  
  } 
}
