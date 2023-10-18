import { Course } from './Course';
export class Inscription {
    courseId: number = 0;
    inscripcionDate: string ="";
    certificationDate: string ="";
    advance: number = 0;
    scoreCourse: number = 0;
    folioCertificate: string ="";
    anyTest: boolean = false;
    course!: Course;
  }