export const doesNodeHaveImageFill = (node: BaseNode): boolean => node.type == "RECTANGLE" &&
  node.fills !== figma.mixed &&
  node.fills.length > 0