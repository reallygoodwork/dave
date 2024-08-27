import { includePx } from "@lib/returnUnitValue";
import { defineNodeType } from "@utils/defineNodeType";

/**
 * @category Style Utils
 * @description Converts Figma's borderRadius to CSS borderRadius
 *
 */
export const getBorderRadius = (node: BaseNode) => {
  const styles: {
    borderRadius: string | number | undefined;
  } = {
    borderRadius: undefined,
  };
  const nodeType = defineNodeType(node);
  if ("topLeftRadius" in nodeType) {
    if (
      nodeType.topLeftRadius === nodeType.topRightRadius &&
      nodeType.topLeftRadius === nodeType.bottomLeftRadius &&
      nodeType.topLeftRadius === nodeType.bottomRightRadius
    ) {
      return (styles.borderRadius =
        nodeType.topLeftRadius === 0
          ? nodeType.topLeftRadius
          : nodeType.topLeftRadius + "px");
    } else {
      return (styles.borderRadius = `${includePx(nodeType.topLeftRadius)} ${includePx(nodeType.topRightRadius)} ${includePx(nodeType.bottomRightRadius)} ${includePx(nodeType.bottomLeftRadius)}`);
    }
  }

  return styles;
};
