// This is a test file that i created for the CA to test the storage.js utility functions

import { describe, it, expect } from "vitest";
import { clearStorage, getUsername } from "./storage";

describe("Testing getUserName", () => {
  it("Test that it returns the name from the user object in storage (first save a user object to storage)", () => {
    const user = { name: "Alice", email: "alice@example.com" };
    localStorage.setItem("user", JSON.stringify(user));
    const userName = getUsername();
    expect(userName).toBe("Alice");
  });

  it("Test that it returns null when no user exists in storage", () => {
    clearStorage(); // i used a function to clear storage instead of localStorage.clear() / .removeItem directly
    const userName = getUsername();
    expect(userName).toBe(null);
  });
});
