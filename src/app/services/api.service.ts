import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../students'

@Injectable()
export class ApiService {

  students: Student[];

  constructor(private http: HttpClient) { }

  getStudents() {
    this.http.get('https://stdresources.herokuapp.com/resources')
    .subscribe(student => {
        console.log(student);
    });
  }

}
