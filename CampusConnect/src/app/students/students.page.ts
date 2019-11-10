import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { StudentlistsService } from '../studentlists.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  coursename: any;
  studentlist: any;
  constructor(private coursesService : CoursesService,private router: Router,private studentlistsService: StudentlistsService) { }

  ngOnInit() {
    this.coursename = this.coursesService.coursename;
    console.log(this.coursesService.coursename);
    this.studentlist = this.studentlistsService.getdata();
    console.log(this.studentlist);
  }
  goBack() {
    this.router.navigate(['/tabs/tab1']);
  }
  onGoToStudentSinglePage(student){
    this.studentlistsService.currentstudent = student;
    this.router.navigate(['/singlestudent']);
  }
  semail(){
    
  }
}
