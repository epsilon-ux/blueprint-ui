export interface DropdownItemInterface {
  text: string;
  ariaLabel?: string;
  action?: string;
  href?: string;
  routerLink?: string; // Deprecated: Use bpRouterLink instead.
  bpRouterLink?: string;
  target?: string;
  isDisabled?: boolean;
  isDestructive?: boolean;
  isActive?: boolean;
  lang?: string;
  iconLeft?: string;
  iconRight?: string;
}