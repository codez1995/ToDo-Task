import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  serverUrl = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  postTask(task:any) {
    return this.httpClient.post(this.serverUrl + "/addTask", task);
  }
  getAllTask() {
    return this.httpClient.get(this.serverUrl + "/addTask");
  }
  shiftTaskinDone(id: number) {
    return this.httpClient.delete(this.serverUrl + "/addTask/" + id);
  }
  postDoneTask(task: any) {
    return this.httpClient.post(this.serverUrl + "/doneTask", task);
  }
  getAllDoneTask() {
    return this.httpClient.get(this.serverUrl + "/doneTask");
  }
  deleteDataFromDoneTask(id: number) {
    return this.httpClient.delete(this.serverUrl + "/doneTask/" + id);
  }
}
