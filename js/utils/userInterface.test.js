// This is a test file that i created for the CA to test the userInterface.js utility functions

import { describe, expect, it } from "vitest";
import { isActivePath } from "./userInterface";

describe("userInterface utilities", () => {
  it("Returns true when current path matches href exactly", () => {
    const currentPath = "/about";
    const href = "/about";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it("Returns true for root path (/) when path is / or /index.html", () => {
    const currentPath1 = "/";
    const currentPath2 = "/index.html";
    const href = "/";
    const result1 = isActivePath(href, currentPath1);
    const result2 = isActivePath(href, currentPath2);
    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  it("Returns true when current path includes the href", () => {
    const currentPath = "/products/item1";
    const href = "/products";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it("Returns false when paths don't match", () => {
    const currentPath = "/contact";
    const href = "/about";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(false);
  });
});
