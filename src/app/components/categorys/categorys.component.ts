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

  menu:any = [
    {
      Id: '1',
      Category: 'Burgers',
      Items: [
        {
        ItemName: "Cheese Burger",
        ItemPrice: "200",
        PassPrice: "123",
        img: "https://www.shutterstock.com/shutterstock/photos/313906544/display_1500/stock-photo-tasty-and-appetizing-hamburger-on-a-yellow-background-313906544.jpg",
      },
      {
        ItemName: "Chicken burger",
        ItemPrice: "250",
        PassPrice: "100",
        img: "https://www.shutterstock.com/shutterstock/photos/154462136/display_1500/stock-photo-fast-food-with-big-tasty-traditional-double-cheeseburger-or-hamburger-154462136.jpg",
      },
      {
        ItemName: "Veggie burger",
        ItemPrice: "150",
        PassPrice: "50",
        img: "https://www.shutterstock.com/shutterstock/photos/81497311/display_1500/stock-photo-double-cheeseburger-with-tomatoes-and-lettuce-on-blue-background-81497311.jpg",
      },]
    },
    {
      Id: '2',
      Category: 'Pizza',
      Items: [
        {
          ItemName: "Cheese Pizza ",
          ItemPrice: "100",
          PassPrice: "50",
          img: "https://www.shutterstock.com/shutterstock/photos/1514037083/display_1500/stock-photo-pizza-margherita-on-black-stone-background-top-view-pizza-margarita-with-tomatoes-basil-and-1514037083.jpg",
        },
        {
          ItemName: "Pepperoni Pizza ",
          ItemPrice: "200",
          PassPrice: "100",
          img: "https://www.shutterstock.com/shutterstock/photos/1514037083/display_1500/stock-photo-pizza-margherita-on-black-stone-background-top-view-pizza-margarita-with-tomatoes-basil-and-1514037083.jpg",
        },
        {
        ItemName: "Meat Pizza ",
        ItemPrice: "300",
        PassPrice: "100",
        img: "https://www.shutterstock.com/shutterstock/photos/1514037083/display_1500/stock-photo-pizza-margherita-on-black-stone-background-top-view-pizza-margarita-with-tomatoes-basil-and-1514037083.jpg",
      },
      {
        ItemName: "BBQ Chicken Pizza ",
        ItemPrice: "125",
        PassPrice: "75",
        img: "https://www.shutterstock.com/shutterstock/photos/1514037083/display_1500/stock-photo-pizza-margherita-on-black-stone-background-top-view-pizza-margarita-with-tomatoes-basil-and-1514037083.jpg",
      },
      {
        ItemName: "Supreme Pizza ",
        ItemPrice: "100",
        PassPrice: "50",
        img: "https://www.shutterstock.com/shutterstock/photos/1514037083/display_1500/stock-photo-pizza-margherita-on-black-stone-background-top-view-pizza-margarita-with-tomatoes-basil-and-1514037083.jpg",
      },]
    },
    {
      Id: '3',
      Category: 'Donuts',
      Items: [
      //   {
      //   ItemName: "Baked Raspberry ",
      //   ItemPrice: "200",
      //   PassPrice: "100",
      //   img: "https://b2cappassetscdn.theentertainerme.com/v7/standard/DXB-Standard-359x404.png",
      // },
      // {
      //   ItemName: "Bavarian Cream ",
      //   ItemPrice: "200",
      //   PassPrice: "100",
      //   img: "https://b2cappassetscdn.theentertainerme.com/v7/standard/DXB-Standard-359x404.png",
      // },
      // {
      //   ItemName: "Chocolate Donuts ",
      //   ItemPrice: "200",
      //   PassPrice: "100",
      //   img: "https://b2cappassetscdn.theentertainerme.com/v7/standard/DXB-Standard-359x404.png",
      // },
    ]
    },
    
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
