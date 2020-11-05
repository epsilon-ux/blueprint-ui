/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { parseLookupString } from '../../helpers';

@Component({
  selector: 'bp-chart-tooltip',
  templateUrl: './chart-tooltip.component.html',
  styleUrls: ['./chart-tooltip.component.scss']
})
export class ChartTooltipComponent implements OnInit {

  @Input() header: string;
  @Input() data: {
    label: string;
    value: string;
    color: string;
  }[];
  @Input() isVisible = false;
  @Input() xPos: number;
  @Input() yPos: number;

  parseLookupString = parseLookupString;

  constructor() { }

  ngOnInit(): void { }

}