import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  numbers: number[] = [];
  otherNumbers: number[] = [];
  doneNumbers: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.numberBuilder();
  }

  numberBuilder = () => {
    for (let i = 0; i < 5; i++) {
      this.numbers.push(i);
    }
  };

  drop = (event: CdkDragDrop<number[]>) => {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  };
}
