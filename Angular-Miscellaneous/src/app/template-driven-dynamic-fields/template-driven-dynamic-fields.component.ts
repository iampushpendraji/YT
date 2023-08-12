import { Component } from "@angular/core";
import { v4 as uuidv4 } from "uuid";  // For generating unique id

@Component({
  selector: "app-template-driven-dynamic-fields",
  templateUrl: "./template-driven-dynamic-fields.component.html",
  styleUrls: ["./template-driven-dynamic-fields.component.css"],
})
export class TemplateDrivenDynamicFieldsComponent {
  studentData: any = [
    {
      studentId: uuidv4(),
      name: "",
      class: "",
      age: "",
      subjects: [
        {
          subjectId: uuidv4(),
          subject: "",
          marks: "",
        },
      ],
    },
  ];

  submitForm(form: any) {
    console.log(this.studentData);
  }

  track(item: any, index: number) {
    return index;
  }

  addNewStudent() {
    this.studentData.push({
      id: uuidv4(),
      name: "",
      class: "",
      age: "",
      subjects: [
        {
          subjectId: uuidv4(),
          subject: "",
          marks: "",
        },
      ],
    });
  }

  removeStudent(studentIndex: number) {
    this.studentData.splice(studentIndex, 1);
  }

  addNewSubject(i: number) {
    this.studentData[i].subjects.push({
      subject: "",
      marks: "",
    });
  }

  removeSubject(studentIndex: number, subjectIndex: number) {
    this.studentData[studentIndex].subjects.splice(subjectIndex, 1);
  }
}
