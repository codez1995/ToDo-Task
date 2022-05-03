import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {
  @Input() DoneTask: any;
  @Output() UnDoneList = new EventEmitter<any>();
  listDatacolumns = [
    {name: "checkBox", displayName: "", width: "100px", type:"checkBox", class:"task"},
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
  selectRow(cell:any) {
    setTimeout(() => {
      this.UnDoneList.emit(cell);
    }, 1000);
  }
  
}
