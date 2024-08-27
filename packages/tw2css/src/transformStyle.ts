import { PropertyMapType } from "./properties/propertyMapType.ts";
import { dimensions } from "./properties/dimensions.ts";
import { positioning } from "./properties/positioning.ts";
import { layout } from "./properties/layout.ts";
import { flexbox } from "./properties/flexbox.ts";

const propertyMap: PropertyMapType = {
  ...dimensions,
  ...positioning,
  ...layout,
  ...flexbox,
};

export const transformStyle = (property: string, value: string) => {
  const propertyConfig = propertyMap[property];
  if (propertyConfig) {
    if (Array.isArray(propertyConfig.name)) {
      return propertyConfig.name.reduce((acc, name) => {
        return {
          ...acc,
          [name]: propertyConfig.transform(value, name),
        };
      }, {});
    } else {
      return {
        [propertyConfig.name]: propertyConfig.transform(value, property),
      };
    }
  }
};
