export interface IGlobalInput {
  placeholder?: string;
  disabled?: boolean;
  inputClass?: string;
  minlength?: number;
  maxlength?: number;
  tabindex?: number;
  row?: number;
}

export interface ISelectValue {
  label: string;
  value: string;
  disabled?: boolean;
}
