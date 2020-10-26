import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  allData = [];
  data = [];

  constructor() { }

  ngOnInit(): void {
    const length = 20; // Must be divisible by types.length
    const types = ['Standard', 'Silver', 'Gold', 'Platinum'];
    const dates = d3.scaleTime().domain([new Date(2020, 0, 1), new Date(2021, 0, 1)]).ticks(d3.timeDay.every(1));
    const data = [];
    for (let i = 0; i < length; i++) {
      data.push({
        xvalue: dates[i % (length / types.length)],
        yvalue: Math.floor(Math.random() * 40),
        type: types[Math.floor(i / (length / types.length))]
      });
    }
    this.data = data;
  }

  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  addData(): void {
    /* if (this.data.length < this.allData.length) {
      const newData = [...this.data];
      newData.push(this.allData[newData.length]);
      this.data = [...newData];
    } */
  }

  removeData(): void {
    /* if (this.data.length > 1) {
      const data = [...this.data];
      data.pop();
      this.data = [...data];
    } */
  }

}