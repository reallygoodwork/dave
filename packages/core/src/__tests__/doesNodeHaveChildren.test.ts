import MockSpec from "./mockspec.ts";
import { doesNodeHaveChildren } from "@validation/doesNodeHaveChildren.ts";

describe("doesNodeHaveChildren", () => {
  it("should return true or false if the node has children", () => {
    expect(doesNodeHaveChildren(MockSpec)).toBe(
      MockSpec.children ? MockSpec.children.length > 0 : false,
    );
  });
});
