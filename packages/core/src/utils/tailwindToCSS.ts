type Styles = {
  paddingInlineStart?: string;
  paddingInlineEnd?: string;
  paddingBlockStart?: string;
  paddingBlockEnd?: string;
  padding?: string;
  marginInlineStart?: string;
  marginInlineEnd?: string;
  marginBlockStart?: string;
  marginBlockEnd?: string;
  margin?: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  gap?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  borderRadius?: string;
  cursor?: string;
  zIndex?: string;
  overflow?: string;
  boxShadow?: string;
  transform?: string;
  transition?: string;
  opacity?: string;
};

function convertScaleToPx(scale: string) {
  if (scale === "auto") {
    return "auto";
  }

  if (scale === "full") {
    return "100%";
  }

  if (scale === "screen") {
    return "100vw";
  }

  if (scale.startsWith("[")) {
    const items = scale.replace("[", "").replace("]", "").split("_");
    return items.join(" ");
  }

  if (scale.endsWith("%")) {
    return scale;
  }

  if (scale === "px") {
    return "1px";
  }

  let scaleNumber = Number(scale);
  return `${scaleNumber * 4}px`;
}

export const tailwindToCSS = (tailwind: string) => {
  const classes = tailwind.split(" ");
  let styles: Styles = {};

  classes.forEach((className) => {
    const [property, value] = className.split("-");
    if (property && value) {
      switch (property) {
        case "p":
          styles = {
            ...styles,
            padding: convertScaleToPx(value),
          };
          break;
        case "py":
          styles = {
            ...styles,
            paddingBlockStart: convertScaleToPx(value),
            paddingBlockEnd: convertScaleToPx(value),
          };
          break;
        case "px":
          styles = {
            ...styles,
            paddingInlineStart: convertScaleToPx(value),
            paddingInlineEnd: convertScaleToPx(value),
          };
          break;
        case "pl":
          styles = {
            ...styles,
            paddingInlineStart: convertScaleToPx(value),
          };
          break;
        case "pr":
          styles = {
            ...styles,
            paddingInlineEnd: convertScaleToPx(value),
          };
          break;
        case "pt":
          styles = {
            ...styles,
            paddingBlockStart: convertScaleToPx(value),
          };
          break;
        case "pb":
          styles = {
            ...styles,
            paddingBlockEnd: convertScaleToPx(value),
          };
          break;
        case "m":
          styles = {
            ...styles,
            margin: convertScaleToPx(value),
          };
          break;
        case "my":
          styles = {
            ...styles,
            marginBlockStart: convertScaleToPx(value),
            marginBlockEnd: convertScaleToPx(value),
          };
          break;
        case "mx":
          styles = {
            ...styles,
            marginInlineStart: convertScaleToPx(value),
            marginInlineEnd: convertScaleToPx(value),
          };
          break;
        case "ml":
          styles = {
            ...styles,
            marginInlineStart: convertScaleToPx(value),
          };
          break;
        case "mr":
          styles = {
            ...styles,
            marginInlineEnd: convertScaleToPx(value),
          };
          break;
        case "absolute":
          styles = {
            ...styles,
            position: "absolute",
          };
          break;
        case "relative":
          styles = {
            ...styles,
            position: "relative",
          };
          break;
        case "fixed":
          styles = {
            ...styles,
            position: "fixed",
          };
          break;
        case "top":
          styles = {
            ...styles,
            top: convertScaleToPx(value),
          };
          break;
        case "right":
          styles = {
            ...styles,
            right: convertScaleToPx(value),
          };
          break;
        case "bottom":
          styles = {
            ...styles,
            bottom: convertScaleToPx(value),
          };
          break;
        case "left":
          styles = {
            ...styles,
            left: convertScaleToPx(value),
          };
          break;
        case "flex":
          styles = {
            ...styles,
            display: "flex",
          };
          break;
        case "flex-row":
          styles = {
            ...styles,
            flexDirection: "row",
          };
          break;
        case "flex-col":
          styles = {
            ...styles,
            flexDirection: "column",
          };
          break;
        case "justify-center":
          styles = {
            ...styles,
            justifyContent: "center",
          };
          break;
        case "items-center":
          styles = {
            ...styles,
            alignItems: "center",
          };
          break;
        case "flex-wrap":
          styles = {
            ...styles,
            flexWrap: "wrap",
          };
          break;
        case "gap":
          styles = {
            ...styles,
            gap: convertScaleToPx(value),
          };
          break;
        case "w":
          styles = {
            ...styles,
            width: convertScaleToPx(value),
          };
          break;
        case "h":
          styles = {
            ...styles,
            height: convertScaleToPx(value),
          };
          break;
      }
    }
  });

  console.log(styles);
  return styles;
};
