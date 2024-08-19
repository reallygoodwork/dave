
export const doesNodeHaveChildren = (node: BaseNode): node is BaseNode & ChildrenMixin =>
  Boolean((node as BaseNode & ChildrenMixin)['children'])