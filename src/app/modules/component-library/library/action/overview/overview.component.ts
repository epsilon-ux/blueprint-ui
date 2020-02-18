import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  text: string = 'Action Text';
  element: string = 'button'; // button, a
  classes: string = 'btn-primary';
  ariaLabel: string = '';
  href: string = 'www.example.com';
  routerLink: string = 'usage';
  target: string = '';
  click = (e) => console.log(e);

  constructor() { }

  ngOnInit() { }
}
