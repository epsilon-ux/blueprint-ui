import { select } from 'd3';

export function rescale(id: string, initWidth: number): void {
  const svg = select(`#${id}`);
  const newWidth = svg.style('width');
  const scale = initWidth / parseInt(newWidth);
  svg.selectAll('text').style('transform', `scale(${0.25 + scale})`);
  svg.selectAll('.line').style('stroke-width', scale + 2 + 'px');
  svg.selectAll('.domain').style('stroke-width', scale + 'px');
  svg.selectAll('.dot').attr('r', 5 * scale);
}