export const createAttributes = (attributes: Record<string, any>) => {
  if (attributes.class) {
    const { class: _, ...rest } = attributes;
    return rest;
  } else {
    return attributes;
  }
};
