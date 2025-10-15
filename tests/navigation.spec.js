// @ts-check
import { test, expect } from "@playwright/test";

test("Navigation to home page, waits for venues to load, click a venue then verify heading in details page", async ({
  page,
}) => {
  const venuesRespPromise = page.waitForResponse(
    (r) =>
      r.url().includes("/api/v1/holidaze/venues") &&
      r.request().method() === "GET" &&
      r.status() === 200
  );
  await page.goto("/");
  await expect(page).toHaveURL("/");
  const venuesResp = await venuesRespPromise;
  const venues = await venuesResp.json();
  const cards = page.locator("#venue-container a[href^='/venue/?id=']");
  await expect(cards).toHaveCount(venues.length, { timeout: 15000 });
  await cards.first().click();
  await expect(page).toHaveURL(/\/venue\/\?id=/);
  await expect(page.locator("main h1")).toContainText(/Venue details/i);
});
