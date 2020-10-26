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
import * as d3Array from 'd3-array';
import { parseLookupString, generateUniqueId } from '../../helpers';
import { rescale, qualitativeColors } from '../../chart-helpers';

@Component({
  selector: 'bp-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('svg')
  svgRef: ElementRef;

  @Input() data;
  @Input() groupBy;
  @Input() xValue: string;
  @Input() yValue: string;
  @Input() xAxisLabel: string;
  @Input() yAxisLabel: string;
  @Input() customYDomain: [number, number];
  @Input() bpID ='lineChart' + String(generateUniqueId());
  @Input() title = 'Line Chart';
  @Input() description = '#{percent}% #{name} with #{value}';
  @Input() formatters = {
    xAxis: (value: number): string => String(value),
    yAxis: (value: number): string => new Intl.NumberFormat().format(value)
  };

  parseLookupString = parseLookupString;

  margin = { top: 20, right: 50, bottom: 50, left: 60 };
  width: number;
  height: number;

  svg: any;
  color: d3.ScaleOrdinal<string, unknown>;
  xScale: any;
  yScale: any;
  xAxis: any;
  yAxis: any;

  groups;

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
      this.prepare();
      this.update();
    }
  }

  ngOnInit(): void {
    this.width = 800 - this.margin.left - this.margin.right,
    this.height = 400 - this.margin.top - this.margin.bottom;
    this.prepare();
  }

  ngAfterViewInit(): void {
    this.svg = d3.select('#' + this.bpID);

    this.svg
      .append('g')
      .attr('class', 'arcs')
      .attr(
        'transform',
        `translate(${(this.width + this.margin.left + this.margin.right) / 2},${(this.height
            + this.margin.top
            + this.margin.bottom)
        / 2})`
      );

    this.update();
    setTimeout(() => {
      rescale(this.bpID, this.width);
    }, 0);
  }

  prepare(): void {
    this.groups = d3Array.groups(this.data, d => d[this.groupBy]);
    const groups = Array.from(this.groups, d => d[0] as string);
    this.color = d3
      .scaleOrdinal()
      .domain(groups)
      .range(qualitativeColors.slice(0, groups.length));
  }

  update(): void {
    const xValues = Array.from(this.data, d => d[this.xValue]);
    const yValues = Array.from(this.data, d => d[this.yValue]);
    const yExtent: [number, number] = d3.extent(yValues);
    const upperPadding = (yExtent[1] - yExtent[0]) * 0.1;

    this.xScale = d3
      .scaleTime()
      .domain(d3.extent(xValues))
      .range([this.margin.left, this.width + this.margin.left])
      .nice();

    this.yScale = d3
      .scaleLinear()
      .domain([
        yExtent[0],
        yExtent[1] + upperPadding
      ])
      .range([this.height + this.margin.top, this.margin.top])
      .nice();

    this.createAxes();
    this.createPoints();
    this.createLines();
  }

  createAxes(): void {
    this.xAxis = d3
      .axisBottom(this.xScale)
      .ticks(5)
      .tickSize(0)
      .tickPadding(10);
    // .tickFormat(this.options.xAxisFormatFunc)

    this.yAxis = d3
      .axisLeft(this.yScale)
      .tickSize(0)
      .tickPadding(10)
      .tickFormat(this.formatters.yAxis);

    this.svg
      .append('g')
      .attr('transform', `translate(0, ${this.height + this.margin.top})`)
      .call(this.xAxis);

    this.svg
      .append('g')
      .attr('transform', `translate(${this.margin.left}, 0)`)
      .call(this.yAxis);
  }

  createPoints(): void {
    this.groups.forEach(group => {
      const fillColor = this.color(group[0]);
      this.svg
        .append('g')
        .selectAll('circle')
        .data(group[1])
        .join('circle')
        .attr('class', 'point')
        .attr('fill', d => fillColor)
        .attr('stroke', d => fillColor)
        .attr('cx', d => this.xScale(d[this.xValue]))
        .attr('cy', d => this.yScale(d[this.yValue]))
        .attr('r', 5);
    });
  }

  createLines(): void {
    const line = d3.line()
      //.defined(d => !isNaN(d))
      .x(d => this.xScale(d[this.xValue]))
      .y(d => this.yScale(d[this.yValue]));

    this.svg
      .append('g')
      .attr('fill', 'none')
      .attr('stroke-width', 2)
      .selectAll('path')
      .data(this.groups)
      .join('path')
      .attr('class', 'line')
      .attr('stroke', d => this.color(d))
      .attr('d', d => line(d[1]));
  }

}