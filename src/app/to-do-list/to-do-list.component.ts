import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { TaskService } from '../task-service/task.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  allTaskList: any[] = [];
  @Output() deleteRecord = new EventEmitter<any>();
  listDatacolumns: any[] = []
  moviesData: any[] = [];
  listDisplayColumns: string[] = [];
  constructor(private taskSvc: TaskService) { }
  ngOnInit(): void {
    this.taskSvc.returnUndoneTask().subscribe((response) => {
      console.log(response);
      this.allTaskList = response;
    })
    this.listDatacolumns = this.taskSvc.listDatacolumns
    this.listDisplayColumns = this.listDatacolumns.map((x: any) => x.name);
  }
  selectRow(cell: any) {
    setTimeout(() => {
      cell.status = "Done"
      this.taskSvc.addedDoneTaskInTable([cell]);
      this.taskSvc.addedUnDoneTaskInTable(null);
    }, 1000);
  }
}
