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
    this.appservice.editItemObj = g_itm;
    this.appservice.editItemObj.idx = itmidx;
  }

  editcat (g_cat:any, idx:any){
    this.appservice.editCatObj = g_cat;
    this.appservice.editCatObj.idx = idx;
  }

  removecat(catidx:any){
    this.appservice.menu.splice(catidx,1)
  }
  removeitem(catidx:any, itmidx:any){
    this.appservice.menu[catidx].Items.splice(itmidx,1)
  }

    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.menu, event.previousIndex, event.currentIndex);
    }
    drop2(event: CdkDragDrop<string[]>, id:any) {
      moveItemInArray(this.menu[id].Items, event.previousIndex, event.currentIndex);
    }
  
}
