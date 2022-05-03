import { Component, OnInit } from '@angular/core';
import { TaskService } from './task-service/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ToDo-Task';
  allTaskList!: any;
  DoneTask: any;

  constructor(private taskSvc: TaskService) {

  }
  ngOnInit(): void {
    this.FetchAllTask();  
    this.getAllDoneTask();  
  }
  FetchAllTask() {
    this.taskSvc.getAllTask().subscribe((response: any) => {
      this.allTaskList = response;
    })
  }

  GetDoneData($event: any) {
    this.deleteRecord($event);
  }

  deleteRecord(cellData: any) {
    this.taskSvc.shiftTaskinDone(cellData.id).subscribe((response) => {
      this.shiftDeleteDatainDoneTable(cellData);
      this.FetchAllTask();
    })
  }

  shiftDeleteDatainDoneTable(cell: any) {
    if(cell.status == "UnDone") {
      cell.status = "Done"
      this.taskSvc.postDoneTask(cell).subscribe((response) => {
        console.log(response);
        this.getAllDoneTask();
      })
    }
  }
  getAllDoneTask() {
    this.taskSvc.getAllDoneTask().subscribe((response) => {
      this.DoneTask = response;
    })
  }
  UnDoneData($event: any) {
    this.taskSvc.deleteDataFromDoneTask($event.id).subscribe((response) => {
      $event.status = "UnDone";
      this.taskSvc.postTask($event).subscribe((response) => {
        this.FetchAllTask();
        this.getAllDoneTask();
      })
    })
  }
}
