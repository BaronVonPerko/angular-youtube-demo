import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mydemo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: Person[] = [];

  constructor() { }

  ngOnInit(): void {
    this.people.push({firstName: 'Chris', lastName: 'Perko'});
    this.people.push({firstName: 'Veronica', lastName: 'Perko'});
    this.people.push({firstName: 'Chloe', lastName: 'Perko'});
  }

}

class Person {
  firstName: string;
  lastName: string;
}
