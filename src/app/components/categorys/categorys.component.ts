import { Component,ElementRef } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { DialogOverviewExample } from '../dialog/dialog.component';


@Component({
  selector: 'app-categorys',
  standalone: true,
   imports: [
    CdkDropList,
    CdkDrag,
    MatButtonModule,
    MatTabsModule,
    CdkAccordionModule,
    DialogOverviewExample,
    ],
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.scss',
  providers:[DialogOverviewExample]
})



export class CategorysComponent {

  dlg = this.odlg;

  menu = [
    {
      Id: '0',
      Category: 'Burgers',
      Items: ["Cheese Burger", "Chicken burger", "Veggie burger"]
    },
    {
      Id: '3',
      Category: 'Pizza',
      Items: ["Cheese Pizza", "Pepperoni Pizza", "Meat Pizza", "BBQ Chicken Pizza", "Supreme Pizza"]
    },
    {
      Id: '4',
      Category: 'Donuts',
      //Items: ["Baked Raspberry", "Bavarian Cream", "Chocolate Donuts"]
      Items: []
    }
  ];
  
  constructor(private odlg:DialogOverviewExample){

    
  }
    drop(event: CdkDragDrop<string[]>) {
      console.info("event1")
      console.info(event)
      moveItemInArray(this.menu, event.previousIndex, event.currentIndex);
    }
    drop2(event: CdkDragDrop<string[]>, id:any) {
      console.info("event2")
      console.info(event)
      moveItemInArray(this.menu[id].Items, event.previousIndex, event.currentIndex);
    }
  
}
