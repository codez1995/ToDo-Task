import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../task-service/task.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {
  DoneTask: any;
  listDisplayColumns!: string[];
  listDatacolumns!: any;
  constructor(private taskSvc: TaskService) { }

  ngOnInit(): void {
    this.taskSvc.returnDoneTask().subscribe((response) => {
      console.log(response);
      this.DoneTask = response;
    })
    this.listDatacolumns = this.taskSvc.listDatacolumns;
    this.listDisplayColumns = this.listDatacolumns.map((x: any) => x.name);
  }
  selectRow(cell:any) {
    setTimeout(() => {
      cell.status = "UnDone"
      this.taskSvc.addedDoneTaskInTable(null);
      this.taskSvc.addedUnDoneTaskInTable([cell]);
    }, 1000);
  }
  
}
