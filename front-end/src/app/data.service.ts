import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  id:number;
  name:string = "";

  constructor() {}

  public courseList: object[] = [
    {'id' : '1', 'name' : 'Math'},
    {'id' : '2', 'name' : 'History'},
    {'id' : '3', 'name' : 'Sociology'},
    {'id' : '4', 'name' : 'Programming'},
    {'id' : '5', 'name' : 'Chemistry'},
  ]

  AddCourse(){
    this.courseList.push({
      "id" : this.id,
      "name" : this.name
    });
  }
}
