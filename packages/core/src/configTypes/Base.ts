import { Dependencies } from "./Dependencies.ts";
import { Config } from "./Config.ts";
import { Element, TypescriptElementTypes } from "./Element.ts";
import {
  Trim,
  PascalCase,
  CamelCasedProperties,
  UnknownRecord,
  UnknownArray,
} from "type-fest";
import { Properties } from "./Properties.ts";

type DeriveFunction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => ReturnType<T>;

export type StyleProperty = Record<
  CamelCasedProperties<string>,
  string | number
>;

export type ElementType = Element;

export type Variant<T extends (...args: any[]) => any> = {
  elementType: ElementType;
  isText?: boolean;
  figmaNodeRef?: string;
  boundProperties: Array<{
    propertyName: string;
    type?:
      | "string"
      | "number"
      | ""
      | UnknownRecord
      | UnknownArray
      | DeriveFunction<T>;
    value?: string | number | boolean | UnknownRecord | UnknownArray;
  }>;
  options: Record<
    CamelCasedProperties<string>,
    | string
    | number
    | boolean
    | Array<any>
    | Record<string, any>
    | DeriveFunction<T>
  >;
  styles: StyleProperty;
};

export type UISpecRoot = {
  children?: Array<UISpecRoot> | undefined;
  className?: Array<string>;
  config?: Config;
  dependencies?: Dependencies;
  description?: string;
  elementAttributes?: Record<string, any>;
  elementType: string;
  hasBackgroundImage?: boolean;
  isComponent?: boolean;
  hasText?: boolean;
  name: Trim<PascalCase<string>>;
  properties?: Array<Properties>;
  textValue?: Trim<string>;
  typeScriptType?: string;
  styles?: StyleProperty;
  variants?: Array<Variant<any>>;
};
