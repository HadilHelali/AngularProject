import {Injectable} from '@angular/core';
import {Task} from '../Task'
// import {TASKS} from '../mock-tasks'
// importing the observable :
import {Observable, of} from 'rxjs'
// include the HTTPClient after downloading the json server (our backend) :
import {HttpClient , HttpHeaders } from '@angular/common/http' ;
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
}
