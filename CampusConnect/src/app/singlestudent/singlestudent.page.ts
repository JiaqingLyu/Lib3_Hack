import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentlistsService } from '../studentlists.service';
import { EmailService } from '../email.service';


@Component({
  selector: 'app-singlestudent',
  templateUrl: './singlestudent.page.html',
  styleUrls: ['./singlestudent.page.scss'],
})
export class SinglestudentPage implements OnInit {
  student;
  constructor(private studentlistsService: StudentlistsService,private router:Router,private emailService: EmailService) { }

  ngOnInit() {
    this.student = this.studentlistsService.currentstudent;
    console.log(this.studentlistsService.currentstudent);
  }
  goBack() {
    this.router.navigate(['/tabs/tab1']);
  }
  semail() : void {
    this.emailService.sendEmail();
  }
}
