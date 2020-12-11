import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

interface DummyDataInterface {
  type: string;
  xValue: number;
  yValue: number;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  allData: DummyDataInterface[][] = [];
  groupedData: DummyDataInterface[][] = [];
  data: DummyDataInterface[] = [];
  types: string[];
  typesUsed = 1;

  constructor() { }

  ngOnInit(): void {
    const length = 20;
    this.types = ['Standard', 'Silver', 'Gold', 'Platinum'];
    const dates = d3.scaleTime().domain([new Date(2020, 0, 1), new Date(2021, 0, 1)]).ticks(d3.timeDay.every(1));
    this.types.forEach((type, typeIndex) => {
      const group = [];
      for (let i = 0; i < length; i++) {
        group.push({
          xvalue: dates[i],
          yvalue: Math.floor(Math.random() * 40) * (typeIndex + 1),
          type: type
        });
      }
      this.allData.push(group);
    });
    this.groupedData = [this.allData[0]];
    this.data = this.allData[0];
  }

  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  addData(): void {
    if (this.typesUsed < this.types.length) {
      this.groupedData.push(this.allData[this.typesUsed]);
      this.data = [].concat(...this.groupedData);
      this.typesUsed++;
    }
  }

  removeData(): void {
    if (this.typesUsed > 1) {
      this.groupedData.pop();
      this.data = [].concat(...this.groupedData);
      this.typesUsed--;
    }
  }

}