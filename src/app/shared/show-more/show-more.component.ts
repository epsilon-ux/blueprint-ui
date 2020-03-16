import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss']
})
export class ShowMoreComponent implements OnInit {

  @Input() summary: string;
  @Input() summaryOpen?: string;
  @Input() isOpen?: boolean;
  summaryText: string;

  constructor() {}

  ngOnInit() {
    if (!this.summaryOpen) {
      this.summaryOpen = this.summary;
    }
    this.summaryText = this.isOpen ? this.summaryOpen : this.summary;
  }
  
  toggleDetails(e) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
    this.summaryText = this.isOpen ? this.summaryOpen : this.summary;
  }
}
