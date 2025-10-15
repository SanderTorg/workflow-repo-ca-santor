import { test, expect } from "@playwright/test";

test("User can log in successfully", async ({ page }) => {
  await page.goto("/login/");
  await expect(page).toHaveURL("/login/");

  await page.fill('form#loginForm input[name="email"]', process.env.USER_EMAIL);
  await page.fill(
    'form#loginForm input[name="password"]',
    process.env.USER_PASSWORD
  );
  await page.click('form#loginForm button[type="submit"]');

  await expect(page).toHaveURL("/");
});

test("user cannot log in with invalid credentials", async ({ page }) => {
  await page.goto("login/");
  await expect(page).toHaveURL("/login/");
  await page.fill(
    'form#loginForm input[name="email"]',
    "invalid_email@example.com"
  );
  await page.fill('form#loginForm input[name="password"]', "invalid_password");

  await page.click('form#loginForm button[type="submit"]');
  await expect(page).toHaveURL("/login/");

  const alert = page.locator('#message-container [role="alert"]');
  await expect(alert).toBeVisible();
  await expect(alert).not.toHaveText("");
});
