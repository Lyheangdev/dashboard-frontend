export {};

declare global {
  interface MenuItem {
    icon?: any;
    key: string;
    label: string;
    href?: string;
  }

  type Submenu = MenuItem & { subitems: Array<MenuItem> };
  type Menu = MenuItem & { submenu: Array<Submenu> };
  type MenuList = Array<MenuItem & { submenu: Array<Submenu> }>;

  // Only use with table column builder
  interface ICollumnAttribute {
    label: string;
    width: number;
    type: StringConstructor | NumberConstructor | BooleanConstructor;
    sorted?: boolean;
    heanderClass?: string;
    textHeaderClass?: string;
    textClass?: string;
    class?: string;
  }

  type IColumnsField = readonly string[];

  type ExtractColumnFiledType<T extends IColumnsField> = T[number];

  type ICollumnHeader<T extends IColumnsField> = {
    [K in ExtractColumnFiledType<T>]: {
      key: `col-key-${K}`;
    } & ICollumnAttribute;
  };

  type ICollumnHeaderValue<T extends IColumnsField> = ICollumnHeader<T>[keyof ICollumnHeader<T>];

  type IConstructToType<T> = T extends StringConstructor
    ? string
    : T extends NumberConstructor
      ? number
      : T extends BooleanConstructor
        ? boolean
        : never;

  type ICollumnData<T extends Record<string, ICollumnAttribute>> = {
    [K in keyof T]: IConstructToType<T[K]['type']> | null;
  };
}
