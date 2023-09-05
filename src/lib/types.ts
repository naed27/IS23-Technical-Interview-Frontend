
export interface TableData {
  data: Data[],
  schema: Schema
}

export interface Data {
  id: string;
  company: string;
  roles: string[];
  gender: string;
  fullname: string;
  mobile: string;
  description: string;
}

export interface Field {
  key: string;
  label: string;
  maxlength: number;
  readonly: boolean;
  required: boolean;
  seq: number;
  show_in_listing: boolean;
  type: string;
  validation: string;
}

export interface Schema {
  fields: Field[]
}

export interface Record {
  id: string;
  company: string;
  roles: string[];
  gender: string;
  fullname: string;
  mobile: string;
  description: string;
}

export type Companies = {
  data: {
      "1": string;
      "2": string;
      "3": string;
      "4": string;
      "5": string;
  };
}
