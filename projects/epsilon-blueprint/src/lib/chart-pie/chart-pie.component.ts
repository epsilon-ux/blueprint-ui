/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  HostListener
} from '@angular/core';
import * as d3 from 'd3';
import { parseLookupString, generateUniqueId } from '../../helpers';
import { rescale, qualitativeColors } from '../../chart-helpers';

@Component({
  selector: 'bp-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('svg')
  svgRef: ElementRef;

  @Input() data;
  @Input() name = 'name';
  @Input() value = 'value';
  @Input() bpID ='pieChart' + String(generateUniqueId());
  @Input() title = 'Pie Chart';
  @Input() description = '#{percent}% #{name} with #{value}';
  @Input() formatters = {
    name: (name: string): string => name,
    percent: (percent: number): string => String(percent) + '%',
    value: (value: number): string => new Intl.NumberFormat().format(value)
  };

  parseLookupString = parseLookupString;

  donutholeSize = 50;
  margin = { top: 20, right: 30, bottom: 50, left: 55 };
  width: number;
  height: number;
  radius: number;

  svg: any;
  arc: any;
  arcs: any;
  pie: any;
  color: d3.ScaleOrdinal<string, unknown>;

  staticArcsGroup;
  focusArcsGroup;
  focusedArcIndex: number;

  detailsKey: string;
  detailsPercent: number;
  detailsValue: number;

  resizeListener;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(e): void {
    clearTimeout(this.resizeListener);
    this.resizeListener = setTimeout(() => {
      rescale(this.bpID, this.width);
    }, 250);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data?.currentValue && !changes.data?.firstChange) {
      this.arcs = this.pie(changes.data.currentValue);
      if (this.focusedArcIndex > this.arcs.length - 1) {
        this.focusArc(this.arcs.length - 1);
      }
      this.update();
    }
  }

  ngOnInit(): void {
    this.width = 400 - this.margin.left - this.margin.right,
    this.height = 400 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;

    this.arc = d3
      .arc()
      .innerRadius(this.radius - this.donutholeSize)
      .outerRadius(Math.min(this.width, this.height) / 2);

    this.color = d3
      .scaleOrdinal()
      .domain(this.data.map(d => d[this.name] as string))
      .range(qualitativeColors);

    this.pie = d3.pie().sort(null).value(d => d[this.value] as number);
    this.arcs = this.pie(this.data);
  }

  ngAfterViewInit(): void {
    this.svg = d3.select('#' + this.bpID);

    // Create clickable arcs that pop out on selected
    const arcsGroup = this.svg
      .append('g')
      .attr('class', 'arcs')
      .attr(
        'transform',
        `translate(${(this.width + this.margin.left + this.margin.right) / 2},${(this.height
            + this.margin.top
            + this.margin.bottom)
        / 2})`
      );

    this.focusArcsGroup = arcsGroup
      .append('g')
      .attr('class', 'arcs-focus');

    this.staticArcsGroup = arcsGroup
      .append('g')
      .attr('class', 'arcs-static');

    this.update();
    setTimeout(() => {
      this.focusArc(this.arcs.length - 1);
      rescale(this.bpID, this.width);
    }, 0);
  }

  update(): void {
    const focusArcs = this.focusArcsGroup
      .selectAll('path')
      .data(this.arcs);

    focusArcs
      .enter()
      .append('path')
      .attr('class', 'arc')
      .attr('d', this.arc)
      .attr('fill', d => this.color(d.data[this.name]));

    focusArcs.attr('d', this.arc);

    focusArcs
      .exit()
      .remove();

    const staticArcs = this.staticArcsGroup
      .selectAll('path')
      .data(this.arcs);

    staticArcs
      .enter()
      .append('path')
      .attr('class', 'arc-static cursor-pointer')
      .attr('d', this.arc)
      .attr('fill', d => this.color(d.data[this.name]))
      .on('click', (d, a) => this.focusArc(a.index));

    staticArcs.attr('d', this.arc);

    staticArcs
      .exit()
      .remove();

  }

  getPercent(value: number): number {
    const total = this.data.reduce((acc: number, current: number) => acc + Number(current[this.value]), 0);
    return Math.round(value / total * 100);
  }

  // Displays data info in center of pie and styles selected arc
  focusArc(index: number): void {
    this.focusedArcIndex = index;
    this.detailsKey = this.data[index][this.name];
    this.detailsPercent = this.getPercent(this.data[index][this.value]);
    this.detailsValue = this.data[index][this.value];

    const that = this;
    d3.selectAll(`#${this.bpID} .arc`).each(function(b, i) {
      if (i !== index) {
        d3.select(this)
          .transition()
          .duration(500)
          .ease(d3.easeElasticOut)
          .style('opacity', 0)
          .attr('transform', 'translate(0, 0)');
      } else {
        d3.select(this)
          .transition()
          .duration(500)
          .ease(d3.easeElasticOut)
          .style('opacity', 0.5)
          .attr('transform', d => {
            const c = that.arc.centroid(d);
            const x = c[0];
            const y = c[1];
            const h = Math.sqrt(x * x + y * y);
            const pullOutSize = 0;
            return `translate(${(x / h) * pullOutSize},${(y / h)
                  * pullOutSize}) scale(1.1)`;
          });
      }
    });
  }

}