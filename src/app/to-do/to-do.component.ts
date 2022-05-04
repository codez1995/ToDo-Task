import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task-service/task.service';

interface Task {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})

export class ToDoComponent implements OnInit {

  tasks: Task[] = [
    {value: 'yes', viewValue: 'YES'},
    {value: 'no', viewValue: 'NO'},
  ];
  taskForm!: FormGroup;
  @Output() getAllTask = new EventEmitter<any>();
  constructor(private taskSvc: TaskService) { }

  ngOnInit(): void {
    this.InitializetaskForm();
    this.taskForm.valueChanges.subscribe((response) => {
      this.SubmitForm();
    })
  }
  InitializetaskForm() {
    this.taskForm = new FormGroup({
      taskName: new FormControl('', [Validators.required]),
      taskDescription: new FormControl('', [Validators.required]),
      repeatTask: new FormControl('', [Validators.required]),
    })
  }

  SubmitForm() {
    if(this.taskForm.valid) {
      let formData = {
        taskName: this.taskForm.value.taskName,
        taskDescription: this.taskForm.value.taskDescription,
        repeatTask: this.taskForm.value.repeatTask,
        status: "UnDone",
      }
      this.taskSvc.addedUnDoneTaskInTable([formData]);
      setTimeout(() => {
        this.taskForm.reset();
      }, 500);
    }
  }
}
