export {}

declare global {
  interface MenuItem {
    icon?: any;
    key: string;
    label: string;
    href?: string;
  }

  type Submenu = MenuItem & {subitems : Array<MenuItem>}
  type Menu = MenuItem & {submenu : Array<Submenu>}
  type MenuList = Array<MenuItem & {submenu : Array<Submenu>}>
}