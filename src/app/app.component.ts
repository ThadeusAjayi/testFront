import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import {Student} from '../students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor() {}

    ngOnInit () {}
}
