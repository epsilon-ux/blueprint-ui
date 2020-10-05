import { Component, OnInit, Input, ElementRef, QueryList, ViewChildren, Output , EventEmitter} from '@angular/core';
import { generateUniqueId } from '../../helpers';
import { RouterLinkActive } from '@angular/router';

interface ItemInterface {
  text: string;
  route?: string;
  children?: ItemInterface[];
  isExpanded?: boolean;

  // isNavigational = false
  value?: string;
  isActive?: boolean;
}[];

@Component({
  selector: 'bp-nav-secondary',
  templateUrl: './nav-secondary.component.html',
  styleUrls: ['./nav-secondary.component.scss']
})
export class NavSecondaryComponent implements OnInit {

  @Input() title: string;
  @Input() items: ItemInterface[];
  @Input() shouldRouteMatchExact = false;
  @Input() areItemsExpanded = false;
  @Input() isNavigational = true;
  @Input() bpID: string;

  @Output() action: EventEmitter<ItemInterface> = new EventEmitter<ItemInterface>();

  @ViewChildren(RouterLinkActive, { read: ElementRef })
  linkRefs: QueryList<ElementRef>;

  uuid: string;
  activeItem: string;

  constructor() { }

  ngOnInit(): void {
    this.validate();

    if (this.isNavigational) {
      setTimeout(() => {
        this.activeItem = this.linkRefs.toArray()
          .find(link => link.nativeElement.classList.contains('active'))
          .nativeElement.textContent.trim();
        for (const item of this.items) {
          this.findActive(item, null);
        }
      }, 0);
    }

    if (!this.bpID) {
      this.uuid = 'navSecondary' + generateUniqueId().toString();
    } else {
      this.uuid = this.bpID;
    }
  }

  findActive(node: ItemInterface, parent: ItemInterface): ItemInterface {
    if (node.text === this.activeItem) {
      if (parent) {
        parent.isExpanded = true;
      }
      return node;
    } else if (node.children) {
      for (const item of node.children) {
        this.findActive(item, node);
      }
    }
  }

  emitAction(item: ItemInterface): void {
    this.action.emit(item);
  }

  validate(): void {
    this.items.forEach(item => {
      if (!item.text) {
        const err = new Error(`Missing text in ${JSON.stringify(item)}`);
        err.name = 'Missing Input';
        throw err;
      }
      if (this.isNavigational) {
        if (item.isActive) {
          const err = new Error(`isActive is only a valid property when isNavigational = false. In ${JSON.stringify(item)}`);
          err.name = 'Invalid Input';
          throw err;
        }
        if (item.route === undefined && !item.children) {
          const err = new Error(`Nav item needs either a route or children in ${JSON.stringify(item)}`);
          err.name = 'Missing Input';
          throw err;
        }
        if (item.route !== undefined && item.children) {
          const err = new Error(`Nav item can't have both a route and children in ${JSON.stringify(item)}`);
          err.name = 'Invalid Input';
          throw err;
        }
      }
    });
  }

}