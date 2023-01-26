import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  courses = COURSES;

  startDate = new Date(2000, 0, 1);

  title = COURSES[0].description;

  price = 9.996532198;

  rate = .67;

  course1 = COURSES[0];

}
