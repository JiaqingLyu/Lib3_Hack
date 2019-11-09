import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
  // showCourse(){
  //   for(var i = 0;i<this.data.length;i++){
  //     return this.data[i];
  //   }
  // }
  
}
