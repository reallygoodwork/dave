export const styleAttributeToObject = (
  style?: string,
): Record<string, string> => {
  return (
    style?.split(";").reduce((acc, style) => {
      const [key, value] = style.split(":");
      if (key && value) {
        // @ts-ignore
        acc[key.trim()] = value.trim();
      }
      return acc;
    }, {}) || {}
  );
};
