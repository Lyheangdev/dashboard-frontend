export {};

declare global {
  //-- Api response type
  interface IApiMetadata {
    page: number;
    page_size: number;
    total_page: number;
    total: number;
  }

  interface IApiError {
    code: string;
    details: null;
    message: string | null;
  }

  type IApiSingleResponse<T> = {
    status: string;
    message: string;
    data: T;
    error: IApiError | null;
  };

  type IApiCollectionResponse<T> = {
    status: string;
    message: string;
    data: Array<T>;
    metadata: IApiMetadata;
    error: IApiError | null;
  };

  //-- Syste menu
  interface MenuItem {
    icon?: any;
    key: string;
    label: string;
    href?: string;
    isAuthorized?: boolean;
  }

  type Submenu = MenuItem & { subitems: Array<MenuItem> };
  type Menu = MenuItem & { submenu: Array<Submenu> };
  type MenuList = Array<MenuItem & { submenu: Array<Submenu> }>;

  //-- Banner type
  type BannerType = 'ban' | 'warning' | 'error' | 'success';

  //-- System table
  interface IScrollTable {
    isScrollable: ComputedRef<boolean>;
    scrollLeft: () => void;
    scrollRight: () => void;
  }

  type ISortOrder = 'asc' | 'desc';
  type ISortType = 'string' | 'number' | 'date';
  type IcollumnSort = {
    sortType: ISortType;
  };

  interface ICollumnAttribute {
    label: string;
    width: number;
    type: StringConstructor | NumberConstructor | BooleanConstructor;
    sort?: IcollumnSort;
    copied?: boolean;
    heanderClass?: string;
    textHeaderClass?: string;
    textClass?: string;
    class?: string;
  }

  type IColumnsField = readonly ['id', ...string[]];

  type ExtractColumnFiledType<T extends IColumnsField> = T[number];

  type ICollumnHeader<T extends IColumnsField> = {
    [K in ExtractColumnFiledType<T>]: {
      key: `${K}`;
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

  type ICollumnData<
    T extends Record<string, ICollumnAttribute>,
    Extra extends Record<string, unknown> = Record<string, unknown>,
  > = {
    [K in keyof T]: IConstructToType<T[K]['type']> | null | undefined;
  } & Extra;
}
