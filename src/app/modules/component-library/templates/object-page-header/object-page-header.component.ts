import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-page-header',
  templateUrl: './object-page-header.component.html',
  styleUrls: ['./object-page-header.component.scss']
})

export class ObjectPageHeaderComponent implements OnInit {

  headingText = 'Object Page Header';

  constructor() { }

  ngOnInit() { }

}