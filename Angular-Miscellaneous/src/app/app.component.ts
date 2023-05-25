import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-miscellaneous';

  studentForm: FormGroup = new FormGroup({
    studentList: new FormArray([this.getStudentFields()]),
  });

  getStudentFields(): FormGroup {
    return new FormGroup({
      student_name: new FormControl(''),
      student_class: new FormControl(''),
      student_age: new FormControl(''),
      studentSubjects: new FormGroup({
        studentSubjectArray: new FormArray([this.putNewSubject()]),
      }),
    });
  }

  putNewSubject() {
    return new FormGroup({
      subject: new FormControl(''),
      marks: new FormControl(''),
    });
  }

  studentListArray() {
    return this.studentForm.get('studentList') as FormArray;
  }

  addStudent() {
    this.studentListArray().push(this.getStudentFields());
  }

  removeStudent(i: number) {
    this.studentListArray().removeAt(i);
  }

  subjectsFormGroup(i: number) {
    return this.studentListArray().at(i).get('studentSubjects') as FormGroup;
  }

  subjectsArray(i: number) {
    return this.subjectsFormGroup(i).get('studentSubjectArray') as FormArray;
  }

  addNewSubject(i: number) {
    this.subjectsArray(i).push(this.putNewSubject());
  }

  removeNewSubject(i: number, j: number) {
    this.subjectsArray(i).removeAt(j);
  }

  getFormData() {
    console.log(this.studentForm.value);
  }
}
