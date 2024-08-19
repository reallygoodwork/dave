/**
 *
 * @param children - The children of the node
 * @param property - The property to check
 * @param comparator - The value to compare against
 * @returns If all children have the same value for the given property
 */
export const findChildStyles = (children: ChildrenMixin['children'], property: string, comparator?: string): boolean => {
  return children
    .filter((child) => child.type === 'TEXT')
    .map((child) => {
      if (property in child) {
        const childNode = child as SceneNode & { [key: string]: never }
        return comparator ? childNode[property] === comparator : childNode[property]
      }
      return false
    })
    .every((val, _, arr) => val === arr[0])
}