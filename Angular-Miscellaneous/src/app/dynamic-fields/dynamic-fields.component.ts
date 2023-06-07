import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-dynamic-fields",
  templateUrl: "./dynamic-fields.component.html",
  styleUrls: ["./dynamic-fields.component.css"],
})
export class DynamicFieldsComponent {
  studentForm: FormGroup = new FormGroup({
    studentList: new FormArray([this.getStudentFields()]),
  });

  getStudentFields(): FormGroup {
    return new FormGroup({
      student_name: new FormControl(""),
      student_class: new FormControl(""),
      student_age: new FormControl(""),
      studentSubjects: new FormGroup({
        studentSubjectArray: new FormArray([this.putNewSubject()]),
      }),
    });
  }

  putNewSubject() {
    return new FormGroup({
      subject: new FormControl(""),
      marks: new FormControl(""),
    });
  }

  studentListArray() {
    return this.studentForm.get("studentList") as FormArray;
  }

  addStudent() {
    this.studentListArray().push(this.getStudentFields());
  }

  removeStudent(i: number) {
    this.studentListArray().removeAt(i);
  }

  subjectsFormGroup(i: number) {
    return this.studentListArray().at(i).get("studentSubjects") as FormGroup;
  }

  subjectsArray(i: number) {
    return this.subjectsFormGroup(i).get("studentSubjectArray") as FormArray;
  }

  addNewSubject(i: number) {
    this.subjectsArray(i).push(this.putNewSubject());
  }

  removeNewSubject(i: number, j: number) {
    this.subjectsArray(i).removeAt(j);
  }

  getFormData() {
    let serverData: any = [],
      tempStudentFormData = JSON.parse(JSON.stringify(this.studentForm.value));
    tempStudentFormData.studentList.forEach((element: any) => {
      let tempObj: any = {
        name: element.student_name,
        class: element.student_class,
        age: element.student_age,
        subject: [],
      };
      element.studentSubjects.studentSubjectArray.forEach(
        (elementSubjectObj: any) => {
          let tempSubObj: any = {
            subject: elementSubjectObj.subject,
            marks: elementSubjectObj.marks,
          };
          tempObj.subject.push(tempSubObj);
        }
      );
      tempObj.subject = JSON.stringify(tempObj.subject);
      serverData.push(tempObj);
    });
    
    console.log(serverData);  // This is the variable which contain all the form data
    /*

      Here we have 4 columns ( keys )
      #name
      #class
      #age
      #subject

      FOR SQL :- Now we can store it very simply in mysql database you only need to create one table which contain 4 columns name (type = varchar), class (type = varchar), age (teype = varchar) and subject (type = json)
      FOR NoSQL :- It is very simple in noSQL databases like MONGODB here we have 4 keys and only we need to store the information in db
    */
  }
}
