export interface Action {
  element: string; // Expect 'a', or 'button'
  text: string;
  ariaLabel: string; // Can use ${key} syntax to insert values from the row corresponding to the given key
  class: string;
  target?: string; // The target of the link i.e. "_blank" to open in a new tab
  path?: string; // Required if element = 'a'
  action?: string; // Required if element = 'button'
  conditions?: ({
    column: string;
    operator: string;
    value: any;
  } | string)[];
}