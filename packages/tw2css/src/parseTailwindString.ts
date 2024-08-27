import { stylesObject } from "./stylesObject.js";
import { transformStyle } from "./transformStyle.js";

export const parseTailwindString = (str: string) => {
  const classes = str.split(" ");
  let styles = stylesObject;

  classes.forEach((className) => {
    if (className.startsWith("text-") || className.startsWith("bg-")) {
      const classNameParts = className.split("-");
      if (classNameParts.length === 2) {
        const [property, value] = classNameParts;

        if (property === undefined || value === undefined) {
          throw new Error(
            "Invalid input: both property and value must be defined.",
          );
        }

        styles = {
          ...styles,
          ...transformStyle(property, value),
        };
      } else {
        const property = classNameParts[0];
        const value = classNameParts.slice(1).join("-");

        if (property === undefined || value === undefined) {
          throw new Error(
            "Invalid input: both property and value must be defined.",
          );
        }

        styles = {
          ...styles,
          ...transformStyle(property, value),
        };
      }
    } else {
      const classNameParts = className.split("-");
      const value = classNameParts.pop();
      const property = classNameParts.join("-");

      if (property === undefined || value === undefined) {
        throw new Error(
          "Invalid input: both property and value must be defined.",
        );
      }

      styles = {
        ...styles,
        ...transformStyle(property, value),
      };
    }
  });

  console.log(styles);
  return styles;
};
