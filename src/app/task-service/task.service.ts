import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  listDatacolumns = [
    {name: "checkBox", displayName: "", width: "100px", type:"checkBox", class:"task"},
    {name: "taskName", displayName: "TASK NAME", width: "200px", type:"text", class:"task"},
    {name: "taskDescription", displayName: "TASK DESCRIPTION", width: "800px", type:"text", class:"task"},
    {name: "repeatTask", displayName: "REPEAT TASK", width:"150px", type:"text", class:"task"},
    {name: "status", displayName: "STATUS", width:"100px", type:"text", class:"task"},
  ]
  addUnDoneTask = new EventEmitter<any>();

  addDoneTask = new EventEmitter<any>();

  addedUnDoneTaskInTable(data: any) {
    this.addUnDoneTask.emit(data);
  }
  returnUndoneTask() {
    return this.addUnDoneTask;
  }
  addedDoneTaskInTable(data: any) {
    this.addDoneTask.emit(data);
  }
  returnDoneTask() {
    return this.addDoneTask;
  }
}
