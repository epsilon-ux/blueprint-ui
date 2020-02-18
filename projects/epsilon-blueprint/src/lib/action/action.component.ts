import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() text: string;
  @Input() element: string = 'button'; // button, a
  @Input() classes: string = 'btn-primary';
  @Input() ariaLabel: string;
  @Input() href: string;
  @Input() routerLink: string;
  @Input() target: string;
  @Input() click: Function;

  constructor() { }

  ngOnInit() { }

}
