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
    xAxis: undefined,
    yAxis: (value: number): string => new Intl.NumberFormat().format(value),
    tooltipHeader: (value: any): string => new Intl.DateTimeFormat().format(value),
    tooltipLabel: (value: any): string => String(value),
    tooltipValue: (value: number): string => new Intl.NumberFormat().format(value)
  };

  parseLookupString = parseLookupString;

  margin = { top: 20, right: 50, bottom: 50, left: 100 };
  width: number;
  height: number;

  svg: any;
  color: d3.ScaleOrdinal<string, unknown>;
  xScale: d3.ScaleTime<number, number>;
  yScale: d3.ScaleLinear<number, number>;
  xAxis: any;
  yAxis: any;

  renderedXAxis;
  renderedYAxis;

  tooltipHeader = '';
  tooltipData = [];

  groups;

  resizeListener;
  renderedLines: any;
  line: d3.Line<[number, number]>;
  isTooltipVisible: boolean;
  tooltipXPos: number;
  tooltipYPos: number;

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
      this.updateAxes();
      this.updateLines();
      this.updatePoints();
      rescale(this.bpID, this.width);
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

    this.renderedLines = this.svg
      .append('g')
      .attr('fill', 'none')
      .attr('stroke-width', 2);

    this.renderedXAxis = this.svg
      .append('g')
      .attr('transform', `translate(0, ${this.height + this.margin.top})`);

    this.renderedYAxis = this.svg
      .append('g')
      .attr('transform', `translate(${this.margin.left}, 0)`);

    this.updateAxes();
    this.updatePoints();
    this.updateLines();
    this.createHoverZones();
    setTimeout(() => {
      rescale(this.bpID, this.width);
    }, 0);
  }

  prepare(): void {
    if (this.groupBy) {
      this.groups = d3Array.groups(this.data, d => d[this.groupBy]);
    } else {
      this.groups = [[null, this.data]];
    }
    const groups = Array.from(this.groups, d => d[0] as string);
    this.color = d3
      .scaleOrdinal()
      .domain(groups)
      .range(qualitativeColors.slice(0, groups.length));

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

    this.line = d3.line()
      // .defined(d => !isNaN(d))
      .x(d => this.xScale(d[this.xValue]))
      .y(d => this.yScale(d[this.yValue]));

    this.xAxis = d3
      .axisBottom(this.xScale)
      .ticks(5)
      .tickSize(0)
      .tickPadding(10);

    if (this.formatters.xAxis) {
      this.xAxis.tickFormat(this.formatters.xAxis);
    }

    this.yAxis = d3
      .axisLeft(this.yScale)
      .tickSize(0)
      .tickPadding(10)
      .tickFormat(this.formatters.yAxis);
  }

  updateAxes(): void {
    this.renderedXAxis
      .transition()
      .ease(d3.easeExpOut)
      .duration(400)
      .call(this.xAxis);

    this.renderedYAxis
      .transition()
      .ease(d3.easeExpOut)
      .duration(400)
      .call(this.yAxis);
  }

  updatePoints(): void {
    const _this = this;
    this.svg
      .selectAll('.point-group')
      .data(this.groups)
      .join('g')
      .attr('class', 'point-group')
      .attr('fill', d => this.color(d[0]))
      .attr('stroke', d => this.color(d[0]))
      .each(function(d) {
        const points = d3.select(this)
          .selectAll('circle')
          .data(d[1]);

        points
          .enter()
          .append('circle')
          .attr('class', 'point')
          .attr('r', 5)
          .attr('cx', d => _this.xScale(d[_this.xValue]))
          .attr('cy', 0)
          .transition()
          .ease(d3.easeExpOut)
          .duration(400)
          .attr('cy', d => _this.yScale(d[_this.yValue]));

        points
          .transition()
          .ease(d3.easeExpOut)
          .duration(400)
          .attr('cx', d => _this.xScale(d[_this.xValue]))
          .attr('cy', d => _this.yScale(d[_this.yValue]));

        points
          .exit()
          .transition()
          .ease(d3.easeExpOut)
          .duration(400)
          .attr('cy', 0)
          .remove();
      });
  }

  updateLines(): void {
    this.renderedLines
      .selectAll('.line')
      .data(this.groups)
      .join('path')
      .attr('class', 'line')
      .attr('stroke', d => this.color(d))
      .transition()
      .ease(d3.easeExpOut)
      .duration(400)
      .attr('d', d => this.line(d[1]));
  }

  createHoverZones(): void {
    const hoverRegionWidth = this.width / this.getXLength();
    this.groups.forEach(group => {
      this.svg
        .append('g')
        .selectAll('rect')
        .data(group[1])
        .join('rect')
        .attr('class', 'chart-hover-zone')
        .attr('fill', 'rgba(0, 0, 0, 0)')
        .attr('x', d => this.xScale(d[this.xValue]) - hoverRegionWidth / 2)
        .attr('width', hoverRegionWidth)
        .attr('height', this.height + this.margin.top)
        .attr('data-index', (d, i) => String(i))
        .on('mousemove', (e, d) => {
          this.tooltipHeader = this.formatters.tooltipHeader(d[this.xValue]);
          this.tooltipData = this.groups.map(g => ({
            label: this.formatters.tooltipLabel(g[0]),
            value: this.formatters.tooltipValue(g[1][e.target.dataset.index][this.yValue]),
            color: this.color(g[0])
          }));
          this.isTooltipVisible = true;
          this.tooltipXPos = e.clientX;
          this.tooltipYPos = e.clientY;
        })
        .on('mouseout', () => this.isTooltipVisible = false);
    });
  }

  getXLength(): number {
    return this.groups.reduce((accumulator: number, current: [string, []]) => {
      return current[1].length > accumulator ? current[1].length : accumulator;
    }, 0) as number;
  }

}