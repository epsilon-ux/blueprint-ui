import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  allData = [];
  data = [];

  constructor() { }

  ngOnInit(): void {
    this.allData = [
      {
        name: 'Sun',
        value: this.randomInt(0, 10000)
      },
      {
        name: 'Mercury',
        value: this.randomInt(0, 10000)
      },
      {
        name: 'Venus',
        value: this.randomInt(0, 10000)
      },
      {
        name: 'Earth',
        value: this.randomInt(0, 10000)
      },
      {
        name: 'Mars',
        value: this.randomInt(0, 10000)
      },
      {
        name: 'Jupiter',
        value: this.randomInt(0, 10000)
      },
      {
        name: 'Saturn',
        value: this.randomInt(0, 10000)
      },
      {
        name: 'Uranus',
        value: this.randomInt(0, 10000)
      },
      {
        name: 'Neptune',
        value: this.randomInt(0, 10000)
      },
      {
        name: 'Pluto',
        value: this.randomInt(0, 10000)
      },
      {
        name: 'Kuiper Belt',
        value: this.randomInt(0, 10000)
      }
    ];
    this.data = this.allData.slice(0, 3);
  }

  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  addData(): void {
    if (this.data.length < this.allData.length) {
      const newData = [...this.data];
      newData.push(this.allData[newData.length]);
      this.data = [...newData];
    }
  }

  removeData(): void {
    if (this.data.length > 1) {
      const data = [...this.data];
      data.pop();
      this.data = [...data];
    }
  }

}