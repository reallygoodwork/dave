export type Element =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "a"
  | "img"
  | "ul"
  | "li"
  | "ol"
  | "nav"
  | "div"
  | "section"
  | "footer"
  | "header"
  | "button"
  | "input";

export type TypescriptElementTypes = HTMLElementTagNameMap[Element];
