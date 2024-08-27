import { createSpecFromHTML } from "@core/createSpecFromHTML.ts";

export const mock = `<nav class="flex flex-1 flex-col" aria-label="Sidebar">
  <ul role="list" class="-mx-2 space-y-1">
    <li>
      <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
      <a href="#" class="group flex gap-x-3 rounded-md bg-gray-50 p-2 pl-3 text-sm font-semibold leading-6 text-indigo-600">Dashboard</a>
    </li>
    <li>
      <a href="#" class="group flex gap-x-3 rounded-md p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Team</a>
    </li>
    <li>
      <a href="#" class="group flex gap-x-3 rounded-md p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Projects</a>
    </li>
    <li>
      <a href="#" class="group flex gap-x-3 rounded-md p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Calendar</a>
    </li>
    <li>
      <a href="#" class="group flex gap-x-3 rounded-md p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Documents</a>
    </li>
    <li>
      <a href="#" class="group flex gap-x-3 rounded-md p-2 pl-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Reports</a>
    </li>
  </ul>
</nav>
`;

const returnConfig = {
  children: [
    {
      children: [
        {
          children: [
            {
              children: [],
              elementAttributes: { href: "#" },
              elementType: "a",
              hasText: true,
              name: "A",
              styles: {
                backgroundColor: "rgb(249,250,251)",
                borderRadius: "0.375rem",
                color: "rgb(79,70,229)",
                columnGap: "0.75rem",
                display: "flex",
                fontSize: "0.875rem",
                fontWeight: 600,
                lineHeight: "1.5rem",
                padding: "0.5rem",
                paddingLeft: "0.75rem",
              },
              textValue: "Dashboard",
            },
          ],
          elementAttributes: {},
          elementType: "li",
          name: "Li",
          styles: {},
        },
        {
          children: [
            {
              children: [],
              elementAttributes: { href: "#" },
              elementType: "a",
              hasText: true,
              name: "A",
              styles: {
                backgroundColor: "rgb(249,250,251)",
                borderRadius: "0.375rem",
                color: "rgb(79,70,229)",
                columnGap: "0.75rem",
                display: "flex",
                fontSize: "0.875rem",
                fontWeight: 600,
                lineHeight: "1.5rem",
                padding: "0.5rem",
                paddingLeft: "0.75rem",
              },
              textValue: "Team",
            },
          ],
          elementAttributes: {},
          elementType: "li",
          name: "Li",
          styles: {},
        },
        {
          children: [
            {
              children: [],
              elementAttributes: { href: "#" },
              elementType: "a",
              hasText: true,
              name: "A",
              styles: {
                backgroundColor: "rgb(249,250,251)",
                borderRadius: "0.375rem",
                color: "rgb(79,70,229)",
                columnGap: "0.75rem",
                display: "flex",
                fontSize: "0.875rem",
                fontWeight: 600,
                lineHeight: "1.5rem",
                padding: "0.5rem",
                paddingLeft: "0.75rem",
              },
              textValue: "Projects",
            },
          ],
          elementAttributes: {},
          elementType: "li",
          name: "Li",
          styles: {},
        },
        {
          children: [
            {
              children: [],
              elementAttributes: { href: "#" },
              elementType: "a",
              hasText: true,
              name: "A",
              styles: {
                backgroundColor: "rgb(249,250,251)",
                borderRadius: "0.375rem",
                color: "rgb(79,70,229)",
                columnGap: "0.75rem",
                display: "flex",
                fontSize: "0.875rem",
                fontWeight: 600,
                lineHeight: "1.5rem",
                padding: "0.5rem",
                paddingLeft: "0.75rem",
              },
              textValue: "Calendar",
            },
          ],
          elementAttributes: {},
          elementType: "li",
          name: "Li",
          styles: {},
        },
        {
          children: [
            {
              children: [],
              elementAttributes: { href: "#" },
              elementType: "a",
              hasText: true,
              name: "A",
              styles: {
                backgroundColor: "rgb(249,250,251)",
                borderRadius: "0.375rem",
                color: "rgb(79,70,229)",
                columnGap: "0.75rem",
                display: "flex",
                fontSize: "0.875rem",
                fontWeight: 600,
                lineHeight: "1.5rem",
                padding: "0.5rem",
                paddingLeft: "0.75rem",
              },
              textValue: "Documents",
            },
          ],
          elementAttributes: {},
          elementType: "li",
          name: "Li",
          styles: {},
        },
        {
          children: [
            {
              children: [],
              elementAttributes: { href: "#" },
              elementType: "a",
              hasText: true,
              name: "A",
              styles: {
                backgroundColor: "rgb(249,250,251)",
                borderRadius: "0.375rem",
                color: "rgb(79,70,229)",
                columnGap: "0.75rem",
                display: "flex",
                fontSize: "0.875rem",
                fontWeight: 600,
                lineHeight: "1.5rem",
                padding: "0.5rem",
                paddingLeft: "0.75rem",
              },
              textValue: "Reports",
            },
          ],
          elementAttributes: {},
          elementType: "li",
          name: "Li",
          styles: {},
        },
      ],
      elementAttributes: { role: "list" },
      elementType: "ul",
      name: "Ul",
      styles: {
        marginBottom: "calc(0.25rem * 0)",
        marginLeft: "-0.5rem",
        marginRight: "-0.5rem",
        marginTop: "calc(0.25rem * calc(1 - 0))",
      },
    },
  ],
  elementAttributes: { "aria-label": "Sidebar" },
  elementType: "nav",
  name: "Nav",
  styles: { display: "flex", flex: "1 1 0%", flexDirection: "column" },
};

describe("createSpecFromHTML", () => {
  it("should return true or false if the node has children", () => {
    expect(createSpecFromHTML(mock)).toStrictEqual(returnConfig);
  });
});
