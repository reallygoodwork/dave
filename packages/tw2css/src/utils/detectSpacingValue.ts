import { convertPercentageKeywordToString } from "../convertPercentageKeywordToString.ts";
import { convertScaleToPx } from "../convertScaleToPx.ts";

export const detectSpacingValue = (value: string, propertyName: string) => {
  if (value.includes("/")) {
    return convertPercentageKeywordToString(value);
  } else if (value.startsWith("[")) {
    const items = value.replace("[", "").replace("]", "").split("_");
    return items.join(" ");
  } else {
    return convertScaleToPx(value, propertyName);
  }
};
