import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent implements OnInit {

  @Input() classes = 'ribbon ribbon-info';
  @Input() text: string;

  constructor() { }

  ngOnInit(): void { }

}