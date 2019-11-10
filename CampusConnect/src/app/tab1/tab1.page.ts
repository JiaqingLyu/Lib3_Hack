import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CoursesService} from '../courses.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;
  constructor(private coursesService : CoursesService) {}
  ngOnInit() {
    this.coursesService
      .getCourses()
      .subscribe(data => {
        this.data = data.split(',');
        console.log(this.data[2]);
        console.log(this.data[3]);
    });
  }
}
