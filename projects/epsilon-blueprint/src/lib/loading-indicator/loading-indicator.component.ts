import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'bp-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})

export class LoadingIndicatorComponent implements OnInit {

  @Input() text: string;
  @Input() ariaLabel: string;
  @Input() kind: 'inline' | 'inPage' | 'overPage';
  @Input() bpID: string;

  constructor() { }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (this.kind === 'overPage' && event.key === 'Tab') {
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    this.validate();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  isTruthy(value: any): boolean {
    return value ? true : false;
  }

  validate(): void {
    if (!this.text && !this.ariaLabel) {
      const err = new Error('bp-loading-indicator: Must provide either \'text\' Input or \'ariaLabel\' Input.');
      err.name = 'Missing Input';
      throw err;
    }
    if (!(this.kind === 'inline' || this.kind === 'inPage' || this.kind === 'overPage')) {
      const err = new Error(
        'bp-loading-indicator: Input \'kind\' can be either \'inline\', \'inPage\', or \'overPage\'.'
      );
      err.name = 'Invalid Input';
      throw err;
    }
  }

}