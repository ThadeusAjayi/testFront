import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../../../students'
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  student : any=[];
  addstud: Boolean = true;
  @Input() upstud: Student;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.student = this.http.get<Student>('http://stdresources.herokuapp.com/resources')
    .subscribe(data => {
      this.student = data;
    });
  }

  addStudent (name: string, age: number, sex: string, department: string, faculty: string, level: string) {
    var newStudent = {
      name: name,
      age: age,
      sex: sex,
      department: department,
      faculty: faculty,
      level: level
    }
    this.http.post('http://stdresources.herokuapp.com/resources', newStudent)
    .subscribe(data => {
      alert(name + " has been added to students");
      this.ngOnInit();
    })
  }

  updateStudent (key: string, name: string, age: number, sex: string, department: string, faculty: string, level: string) {
    var newStudent = {
      name: name,
      age: age,
      sex: sex,
      department: department,
      faculty: faculty,
      level: level
    }
    this.http.put('http://stdresources.herokuapp.com/resources/' + key, newStudent)
    .subscribe(data => {
      alert(name + " details has been updated");
      this.addstud = true;
      this.ngOnInit();
    })
  }
  
  deleteStudent (key: string, name: string) {
    this.http.delete('http://stdresources.herokuapp.com/resources/'+ key)
    .subscribe(data => {
      alert(name + " has been removed from student resources")
      this.ngOnInit();
    });
  }

  setUpdate (stud: Student) {
    this.addstud = false;
    this.upstud = stud;
    this.ngOnInit();
  }

}
