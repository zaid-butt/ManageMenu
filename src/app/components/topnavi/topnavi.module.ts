import { Component } from '@angular/core';

@Component({
  selector: 'topnavi',
  standalone: true,
  imports: [],
  template: `
      <div class="topnavi">
      <img src="assets/icons/arrow-left.svg">
      <h3>Main menu</h3>
      </div>
  `,
  //styleUrl: './alerts.component.css'
})
export class Topnavi {

}