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
    {name: "taskName", displayName: "TASK NAME", width: "200px", type:"text", class:"task"},
    {name: "taskDescription", displayName: "TASK DESCRIPTION", width: "800px", type:"text", class:"task"},
    {name: "repeatTask", displayName: "REPEAT TASK", width:"150px", type:"text", class:"task"},
    {name: "status", displayName: "STATUS", width:"100px", type:"text", class:"task"},
    {name: "icons", displayName: "ICON", width:"200px", type:"icons", class:"task"}
  ]
  moviesData!: any[];
  listDisplayColumns!: string[];
  constructor() { }
  ngOnInit(): void {
    this.listDisplayColumns = this.listDatacolumns.map((x: any) => x.name);
  }
  DoneList(cell: any) {
    this.deleteRecord.emit(cell);
  }
}
