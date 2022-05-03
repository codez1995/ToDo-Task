import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TaskService } from '../task-service/task.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  @Input() allTaskList: any;
  @Output() deleteRecord = new EventEmitter<any>();
  listDatacolumns = [
    {name: "checkBox", displayName: "", width: "100px", type:"checkBox", class:"task"},
    {name: "taskName", displayName: "TASK NAME", width: "200px", type:"text", class:"task"},
    {name: "taskDescription", displayName: "TASK DESCRIPTION", width: "800px", type:"text", class:"task"},
    {name: "repeatTask", displayName: "REPEAT TASK", width:"150px", type:"text", class:"task"},
    {name: "status", displayName: "STATUS", width:"100px", type:"text", class:"task"},
  ]
  moviesData!: any[];
  listDisplayColumns!: string[];
  constructor() { }
  ngOnInit(): void {
    this.listDisplayColumns = this.listDatacolumns.map((x: any) => x.name);
  }
  selectRow(cell: any) {
    setTimeout(() => {
      this.deleteRecord.emit(cell);
    }, 1000);
  }
}
