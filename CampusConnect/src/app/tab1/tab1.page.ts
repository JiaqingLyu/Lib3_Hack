import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CoursesService} from '../courses.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;
  constructor(private coursesService : CoursesService,private router: Router) {}
  ngOnInit() {
    this.coursesService
      .getCourses()
      .subscribe(data => {
        //   data.replace('"','');
        //   data.replace('[','');
        //   data.replace(']','');
        this.data = data.split(',');
        // console.log(this.data[2]);
        // console.log(this.data[3]);
    });
    
  }
  goToCourseSinglePage(course){
    this.coursesService.coursename = course.substr(2);
    this.router.navigate(['/students']);
  }
}
