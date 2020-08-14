import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { parseLookupString } from '../../../../../helpers';
import { TableActionInterface } from '../../../table.interface';

interface Conditions {
  column: string;
  operator: string;
  value: any;
}

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @Input()
  actionItems: TableActionInterface[];

  @Input()
  rowId: string;

  @Input()
  rowData: Record<string, unknown>;

  @Input()
  classList: string;

  @Input()
  bpID: string;

  @Output()
  emitAction = new EventEmitter();

  renderedActions = [];

  // Scopes imported function to the class
  parseLookupString = parseLookupString;

  constructor() { }

  ngOnInit(): void {
    if (this.classList.includes('dropdown-item')) {
      this.actionItems.forEach(action => {
        action.class = '';
      });
    }

    // Determines which action items to show for this row
    const filteredActions = [];
    this.actionItems.forEach(action => {
      if (action.conditions) {
        if (this.reduceConditions(action.conditions)) {
          filteredActions.push(action);
        }
      } else {
        filteredActions.push(action);
      }
    });
    this.renderedActions = filteredActions;
  }

  // Takes in conditions array from an actionItem and evaluates whether the conditions are met
  reduceConditions(actionConditions: (Conditions | string)[]): boolean {
    // Splits conditions array into condition and the logical operator arrays
    const logicalOperators = [];
    const conditions = [];
    actionConditions.forEach((condition, i) =>
      (i % 2 === 0
        ? conditions.push(condition)
        : logicalOperators.push(condition))
    );

    // Gets array of booleans from evaulating individual conditions
    const booleans = conditions.map((condition: Conditions) =>
      this.compare(condition.operator)(
        this.rowData[condition.column],
        condition.value
      )
    );

    // Reduces conditions down to a single boolean based off the connecting logical operators
    if (booleans.length > 1) {
      return booleans.reduce((acc: boolean, curr: boolean, i: number) => {
        if (i > 0) {
          switch (logicalOperators[i - 1]) {
            case '&&':
              return acc && curr;
            case '||':
              return acc || curr;
            default:
              throw new Error(
                'Invalid logical operator provided in action conditions.'
              );
          }
        }
      });
    } else {
      return booleans[0];
    }
  }

  // Returns a function that compares two arguments dependent on the operator
  compare(operator: string): (a: any, b: any) => boolean {
    switch (operator) {
      case '>':
        return (a, b) => a > b;
      case '<':
        return (a, b) => a < b;
      case '>=':
        return (a, b) => a >= b;
      case '<=':
        return (a, b) => a <= b;
      case '===':
        return (a, b) => a === b;
      case '==':
        // eslint-disable-next-line eqeqeq
        return (a, b) => a == b;
      case '!==':
        return (a, b) => a !== b;
      case '!=':
        // eslint-disable-next-line eqeqeq
        return (a, b) => a != b;
      default:
        throw new Error('Invalid operator provided in action condition.');
    }
  }

  triggerAction(action): void {
    this.emitAction.emit(action);
  }

}