import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { parseLookupString } from "../../../helpers";

@Component({
  selector: "app-actions",
  templateUrl: "./actions.component.html",
  styleUrls: ["./actions.component.scss"]
})
export class ActionsComponent implements OnInit {
  @Input()
  actionItems: {
    element: string; // Expect 'a', or 'button'
    text: string;
    ariaLabel: string; // Can use ${key} syntax to insert values from the row corresponding to the given key
    class: string;
    path?: string; // Required if element = 'a'
    action?: string; // Required if element = 'button',
    conditions?: any;
  }[];

  @Input()
  rowId;

  @Input()
  rowData;

  @Input()
  classList: string;

  @Output()
  emitAction = new EventEmitter();

  renderedActions = [];

  // Scopes imported function to the class
  parseLookupString = parseLookupString;

  constructor() {}

  ngOnInit() {
    if (this.classList.includes("dropdown-item")) {
      this.actionItems.forEach(action => {
        action.class = "";
      });
    }

    let filteredActions = [];
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

  reduceConditions(actionConditions) {
    const logicalOperators = [];
    const conditions = [];
    actionConditions.forEach((condition, i) =>
      i % 2 === 0
        ? conditions.push(condition)
        : logicalOperators.push(condition)
    );

    const booleans = conditions.map(condition =>
      this.compare(condition.operator)(
        this.rowData[condition.column],
        condition.value
      )
    );

    if (booleans.length > 1) {
      return booleans.reduce((acc, curr, i) => {
        if (i > 0) {
          switch (logicalOperators[i - 1]) {
            case "&&":
              return acc && curr;
            case "||":
              return acc || curr;
            default:
              throw new Error(
                "Invalid logical operator provided in action conditions."
              );
          }
        }
      });
    } else {
      return booleans[0];
    }
  }

  compare(operator: string): Function {
    switch (operator) {
      case ">":
        return (a, b) => a > b;
      case "<":
        return (a, b) => a < b;
      case ">=":
        return (a, b) => a >= b;
      case "<=":
        return (a, b) => a <= b;
      case "===":
        return (a, b) => a === b;
      case "==":
        return (a, b) => a == b;
      case "!==":
        return (a, b) => a !== b;
      case "!=":
        return (a, b) => a != b;
      default:
        throw new Error("Invalid operator provided in action condition.");
    }
  }

  triggerAction(action) {
    this.emitAction.emit(action);
  }
}
