import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardColumnComponent } from './board-column/board-column.component';
import { BoardCardComponent } from './components/board-card/board-card.component';



@NgModule({
  declarations: [
    BoardColumnComponent,
    BoardCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class KanbanBoardModule { }
