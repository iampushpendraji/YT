import { Component } from '@angular/core';

@Component({
  selector: 'app-dymanic-column-row-wihout-reactive-forms',
  templateUrl: './dymanic-column-row-wihout-reactive-forms.component.html',
  styleUrls: ['./dymanic-column-row-wihout-reactive-forms.component.css'],
})
export class DymanicColumnRowWihoutReactiveFormsComponent {
  studentListArray: any = [
    {
      name: 'Pushpendra',
      email: 'pushpendra@xyz.com',
      class: 'Btech',
      age: 22,
      language: 'Hindi',
    },
    {
      name: 'Sagar',
      email: 'sagar@xyz.com',
      class: 'MBA',
      age: 24,
      language: 'Hindi',
    },
    {
      name: 'John',
      email: 'john@xyz.com',
      class: 'Btech',
      age: 23,
      language: 'English',
    },
    {
      name: 'Golu',
      email: 'golu@xyz.com',
      class: 'BCA',
      age: 21,
      language: 'Hindi',
    },
    {
      name: 'Vaishnavi',
      email: 'vaishnavi@xyz.com',
      class: 'BCA',
      age: 20,
      language: 'Hindi',
    },
    {
      name: 'Jasmine',
      email: 'jasmine@xyz.com',
      class: 'MBA',
      age: 23,
      language: 'English',
    },
    {
      name: 'Sonia',
      email: 'sonia@xyz.com',
      class: 'Bcom',
      age: 19,
      language: 'Hindi',
    },
    {
      name: 'Rahul',
      email: 'rahul@xyz.com',
      class: 'Btech',
      age: 21,
      language: 'English',
    },
    {
      name: 'Ritivesh',
      email: 'ritivesh@xyz.com',
      class: 'Btech',
      age: 22,
      language: 'English',
    },
  ];
  headerCols = Object.keys(this.studentListArray[0]);
  // deleteCol: boolean = false;
  editMode: boolean = false;

  addNewColumn() {
    let person: any = prompt('Please enter new column name');
    if (person == null || person == '') {
      return;
    } else {
      this.studentListArray = this.studentListArray.map((element: any) => {
        element[person] = '';
        return element;
      });
      this.headerCols = Object.keys(this.studentListArray[0]);
    }
  }

  addNewRow() {
    let newObj: any = {};
    this.headerCols.forEach((ele: any) => {
      newObj[ele] = '';
    });
    this.studentListArray.push(newObj);
  }

  deleteRow(i: number) {
    this.studentListArray.splice(i, 1);
  }

  deleteColumn(colName: string) {
    this.studentListArray = this.studentListArray.map((element: any) => {
      delete element[colName];
      return element;
    });
    this.headerCols = Object.keys(this.studentListArray[0]);
  }
}
