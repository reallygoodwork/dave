export type PropertyMapType = {
  [key: string]: {
    name: string | string[];
    transform: (value: string, propertyName: string) => string;
  };
};
