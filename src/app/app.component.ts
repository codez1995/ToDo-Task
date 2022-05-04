import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from './task-service/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ToDo-Task';

  constructor() {
  }
  ngOnInit(): void {  
  }
}
