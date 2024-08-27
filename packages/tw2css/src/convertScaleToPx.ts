const scaleKeywords: Record<string, string> = {
  auto: "auto",
  full: "100%",
  svw: "100svw",
  lvw: "100lvw",
  dvw: "100dvw",
  svh: "100svh",
  lvh: "100lvh",
  dvh: "100dvh",
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
  px: "1px",
};

export const convertScaleToPx = (
  scale: string,
  propertyName: string,
  base: number = 4,
) => {
  if (propertyName === "w" && scale === "screen") {
    return "100vw";
  } else if (propertyName === "h" && scale === "screen") {
    return "100vh";
  }

  if (scaleKeywords[scale]) {
    return scaleKeywords[scale];
  }

  let scaleNumber = Number(scale);
  if (isNaN(scaleNumber)) {
    return scale;
  }

  return `${scaleNumber * base}px`;
};
