import { Component,ElementRef } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { DialogOverviewExample } from '../dialog/dialog.component';
import { AppService } from '../../app.service';

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


  menu:any = this.appservice.menu
  
  constructor(private odlg:DialogOverviewExample, private appservice:AppService){
  }

  edititem (g_cat:any, g_itm:any, itmidx:any){
    // console.log(g_cat);
    // console.log(g_itm);
    // console.log("edit item " + g_itm.ItemName + " and Category " + g_cat.Category )
    let item_itemname = document.getElementById("item_itemname");
    item_itemname?.setAttribute("value", g_itm.ItemName);

    let item_Price1 = document.getElementById("item_Price1");
    item_Price1?.setAttribute("value", g_itm.ItemPrice);

    let item_Price2 = document.getElementById("item_Price2");
    item_Price2?.setAttribute("value", g_itm.PassPrice);
    this.appservice.editItemjObj = g_itm;
    this.appservice.editItemjObj.idx = itmidx;
  }
  removecat(catidx:any){
    this.appservice.menu.splice(catidx,1)
  }
  removeitem(catidx:any, itmidx:any){
    this.appservice.menu[catidx].Items.splice(itmidx,1)
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
