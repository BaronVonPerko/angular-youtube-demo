import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mydemo-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.count += 1;
  }

  subtract(): void {
    this.count -= 1;
  }

  clear(): void {
    this.count = 0;
  }

}
