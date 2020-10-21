import { select } from 'd3';

export function rescale(id: string, initWidth: number): void {
  const svg = select(`#${id}`);
  const newWidth = svg.style('width');
  const scale = initWidth / parseInt(newWidth);
  svg.selectAll('text').style('transform', `scale(${0.25 + scale})`);
  svg.selectAll('.line').style('stroke-width', scale + 2 + 'px');
  svg.selectAll('.domain').style('stroke-width', scale + 'px');
  svg.selectAll('.point').style('stroke-width', scale + 'px');
  /* svg.selectAll('.point').style('transform', `scale(${scale})`); */
}

export const qualitativeColors = [
  '#6453b5',
  '#ff5c49',
  '#40d5bb',
  '#785ef0',
  '#7b1e7a',
  '#0095f6',
  '#0c0a3e',
  '#909cc2',
  '#3e04bd',
  '#8d2211',
  '#4bb5b2'
];