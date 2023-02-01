import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { RouterPracticeComponent } from './router-practice/router-practice.component';
import { GetCoursesService } from './get-courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    RouterPracticeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GetCoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
