// ************************************************ //
// **************** Imports *********************** //
// ************************************************ //

import {Injectable} from '@angular/core';
import {Task} from '../Task'
// import {TASKS} from '../mock-tasks'
// importing the observable :
import {Observable, of} from 'rxjs'
// include the HTTPClient after downloading the json server (our backend) :
import {HttpClient , HttpHeaders } from '@angular/common/http' ;

/////// for the post request :
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
// ************************************************ //
// ************************************************ //


@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root'
})

export class TaskService {
  // the URL for the ressource (DB) :
  private apiUrl = 'http://localhost:5000/tasks' ;
  // the service is going to use another one :
  constructor(private http : HttpClient) { }
// we're going to use http methods get , post ...
  getTasks() : Observable<Task[]> {
    //* Turning the array to an observable with of :
    // return of(TASKS) ; *//
    // because we have the TASKS in our database , we're going to get
    // them from there :
    return this.http.get<Task[]>(this.apiUrl)
    // <Task[]> to specify the type because this will return an observable
  }

  // function to delete the task :
  deleteTask(task:Task) : Observable<Task> {
    // so it can be interpreted we use `` and we add the id to delete the specified task :
    const url = `${this.apiUrl}/${task.id}` ;
    // returns an observable after deleting the task
    return this.http.delete<Task>(url);
  }

  // function to update a task :
  updateTaskReminder(task:Task) : Observable<Task> {
    // needs the id specifier
    const url = `${this.apiUrl}/${task.id}` ;
    // it is a post request :
    return this.http.put<Task>(url,task,httpOptions);
  }

  // function to add a task :
  addTask(task:Task) : Observable<Task> {
    // it is a post request :
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }

}

