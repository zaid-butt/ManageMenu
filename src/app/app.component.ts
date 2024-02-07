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
  
movies = [
  {
    uId: '0',
    name: 'GroupA',
    children: ["a1", "a2", "a3"]
  },
  {
    uId: '3',
    name: 'GroupB',
    children: ["b1", "b2"]
  },
  {
    uId: '4',
    name: 'GroupC',
    children: ["c1", "c2", "c3", "c4"]
  }
];


  drop(event: CdkDragDrop<string[]>) {
    console.info("event1")
    console.info(event)
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  drop2(event: CdkDragDrop<string[]>, id:any) {
    console.info("event2")
    console.info(event)
    this.movies.forEach((movie,idx)=>{
      if(id.toString() === movie.uId.toString()){
        moveItemInArray(this.movies[idx].children, event.previousIndex, event.currentIndex);
      }
    })
  }
}
