import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input()
  course: Course | undefined;

  @Input()
  cardIndex: number | undefined;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {

  }

  onCourseViewed() {
    console.log("Course Clicked!");

    this.courseEmitter.emit(this.course);
  };

  cardClasses() {
    return {
      'beginner': this.course?.category == 'BEGINNER'
    };
  };

  cardStyles() {
    return {
      'text-decoration': 'underline'
    }
  };

}
