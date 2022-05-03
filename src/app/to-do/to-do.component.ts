import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
    this.InitializetaskForm();
  }
  InitializetaskForm() {
    this.taskForm = new FormGroup({
      taskName: new FormControl('', [Validators.required]),
      taskDescription: new FormControl('', [Validators.required]),
      repeatTask: new FormControl('', [Validators.required]),
    })
  }
}
