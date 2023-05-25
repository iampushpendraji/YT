import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiple-column-search-filter-table',
  templateUrl: './multiple-column-search-filter-table.component.html',
  styleUrls: ['./multiple-column-search-filter-table.component.css'],
})
export class MultipleColumnSearchFilterTableComponent {
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
  ];
  tempStudentListArray = [...this.studentListArray];
  @ViewChild('nameVar') nameVar: any = '';
  @ViewChild('classVar') classVar: any = '';
  @ViewChild('ageVar') ageVar: any = '';
  @ViewChild('emailVar') emailVar: any = '';
  @ViewChild('languageVar') languageVar: any = '';

  searchFilter() {
    this.tempStudentListArray = [];
    let filterObject: any = {
      name: this.nameVar.nativeElement.value,
      class: this.classVar.nativeElement.value,
      age: this.ageVar.nativeElement.value,
      email: this.emailVar.nativeElement.value,
      language: this.languageVar.nativeElement.value,
    };
    for (let i = 0; i < this.studentListArray.length; i++) {
      let isStringExist;
      for (let key in filterObject) {
        if (key == 'age') {
          isStringExist =
            this.studentListArray[i][key]
              .toString()
              .indexOf(filterObject[key]) > -1;
        } else {
          isStringExist =
            this.studentListArray[i][key]
              .toUpperCase()
              .indexOf(filterObject[key].toUpperCase()) > -1;
        }
        if (isStringExist == false) {
          break;
        }
      }
      if (isStringExist) {
        this.tempStudentListArray.push(this.studentListArray[i]);
      }
    }
  }
}
