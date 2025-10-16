import { test, expect } from "@playwright/test";

const validEmail = process.env.USER_EMAIL;
const validPassword = process.env.USER_PASSWORD;

test.describe("Login testing with a valid user and not a valid user", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login/");
  });
  test("User can log in successfully", async ({ page }) => {
    await expect(page).toHaveURL("/login/");
    expect(validEmail).toBeTruthy();
    expect(validPassword).toBeTruthy();

    await page.fill('form#loginForm input[name="email"]', validEmail);
    await page.fill('form#loginForm input[name="password"]', validPassword);

    await Promise.all([
      page.waitForResponse(
        (resp) => resp.url().includes("/login/") && resp.status() === 200
      ),
      page.click('button[type="submit"]'),
    ]);
    const homePageHeader = page.locator('h1:has-text("Welcome to this site"),');
    await expect(homePageHeader).toBeVisible({ timeout: 10000 });

    await expect(page).not.toContain("/login/");
  });

  test("user cannot log in with invalid credentials", async ({ page }) => {
    await expect(page).toHaveURL("/login/");
    await page.fill(
      'form#loginForm input[name="email"]',
      "invalid_email@example.com"
    );
    await page.fill(
      'form#loginForm input[name="password"]',
      "invalid_password"
    );

    await page.click('form#loginForm button[type="submit"]');
    await expect(page).toHaveURL("/login/");

    const alert = page.locator('#message-container [role="alert"]');
    await expect(alert).toBeVisible();
    await expect(alert).not.toHaveText("");
  });
});
