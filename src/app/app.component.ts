import {Component} from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: ['app.css'],
  standalone: true,
  imports: [CdkDropList, CdkDrag],
})
export class AppComponent {
  
  menu = [
  {
    Id: '0',
    Category: 'Burgers',
    Items: ["Cheese Burger", "chicken burger", "Turkey burger", "Veggie burger"]
  },
  {
    Id: '3',
    Category: 'Pizza',
    Items: ["Cheese Pizza", "Veggie Pizza", "Pepperoni Pizza", "Meat Pizza", "BBQ Chicken Pizza", "Supreme Pizza"]
  },
  {
    Id: '4',
    Category: 'Donuts',
    Items: ["Baked Raspberry", "Mochi Donuts", "Bavarian Cream", "Chocolate Donuts"]
  }
];


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
