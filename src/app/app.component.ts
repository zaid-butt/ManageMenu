import { Component } from '@angular/core';

import { header } from './components/header/header.component';
import { Topnavi } from './components/topnavi/topnavi.module';
import { CategorysComponent } from './components/categorys/categorys.component';



@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: ['app.css'],
  standalone: true,
  imports: [
    header,
    Topnavi,
    CategorysComponent,
  ]
})


export class AppComponent {

}
