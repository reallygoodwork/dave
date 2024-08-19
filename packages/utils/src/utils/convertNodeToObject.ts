type NodeObject = {
  id: string;
  type: string;
  parent?: NodeObject;
  children?: NodeObject[];
  masterComponent?: NodeObject;
  [key: string]: unknown;
};

/**
 * Transform node to object with keys, that are hidden by default.
 * For example:
 * ```ts
 * const node = figma.currentPage.findOne((el) => el.type === "TEXT");
 * console.log(Object.keys(node).length) // 1
 * console.log(Object.keys(nodeToObject(node)).length) // 42
 * console.log(Object.keys(nodeToObject(node, true)).length) // 39
 * ```
 *
 * @param node
 * @param withoutRelations
 */
export const convertNodeToObject = (node: BaseNode & { [key: string]: never }, withoutRelations?: boolean) => {
  const props = Object.entries(Object.getOwnPropertyDescriptors(node.__proto__)) as Array<[string, PropertyDescriptor]>
  const blocklist = ['parent', 'children', 'removed', 'masterComponent']
  const obj: NodeObject = { id: node.id, type: node.type }
  for (const [name, prop] of props) {
    if (prop.get && !blocklist.includes(name)) {
      try {
        if (typeof obj[name] === 'symbol') {
          obj[name] = 'Mixed'
        } else {
          obj[name] = prop.get.call(node)
        }
      } catch (err) {
        obj[name] = undefined
      }
    }
  }
  if (node.parent && !withoutRelations) {
    obj.parent = { id: node.parent.id, type: node.parent.type }
  }
  if ('children' in node && !withoutRelations) {
    // @ts-ignore
    obj.children = node.children.map((child) => convertNodeToObject(child, withoutRelations))
  }

  if (node.masterComponent && !withoutRelations) {
    obj.masterComponent = convertNodeToObject(node.masterComponent, withoutRelations)
  }
  return obj
}
