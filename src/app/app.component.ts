import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { COURSES } from 'src/db-data';
import { GetCoursesService } from './get-courses.service';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data = {
    title: 'Angular Course',
  };

  onLogoClicked() {
    alert("Hello");
  };

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  };

  onCourseSelected(course: Course) {
    console.log("Card clicked!", course);
  };

  courses$: any;

  startDate = new Date(2000, 0, 1);

  title = COURSES[0].description;

  price = 9.996532198;

  rate = .67;

  course1 = COURSES[0];

  constructor(private getCourses: GetCoursesService) {

  }

  ngOnInit() {

    //THE BELOW CODE IS ALSO AN ACCEPTABLE WAY TO DISPLAY THE COURSES IN THE TEMPLATE
    // this.getCourses.getCourses()
    //   .subscribe((ele: any) => this.courses = ele);

    this.courses$ = this.getCourses.getCourses();

  }

}


