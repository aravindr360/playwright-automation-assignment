import { test, expect } from '@playwright/test';
import testData from '../testData.json';

test.describe('Practice Test Automation Suite', () => {

  // Runs before every test to maximize framework execution speed
  test.beforeEach(async ({ page }) => {
    await page.goto(testData.baseUrl);
  });

  // --- FUNCTIONAL SCENARIOS ---

  test('TC01: Verify successful login with valid credentials', async ({ page }) => {
    test.setTimeout(60000); // Protection against system lag
    await page.locator('#username').fill(testData.validUser.username);
    await page.locator('#password').fill(testData.validUser.password);
    await page.locator('#submit').click();

    await page.waitForURL(testData.validUser.expectedSuccessUrl);
    const successHeader = page.locator('h1.post-title');
    await expect(successHeader).toBeVisible();
    await expect(successHeader).toHaveText('Logged In Successfully');
  });

  test('TC02: Verify error message with invalid username', async ({ page }) => {
    await page.locator('#username').fill(testData.invalidUser.username);
    await page.locator('#password').fill(testData.invalidUser.password);
    await page.locator('#submit').click();

    const errorAlert = page.locator('#error');
    await expect(errorAlert).toBeVisible();
    await expect(errorAlert).toHaveText(testData.invalidUser.errorMessage);
  });

  test('TC03: Verify error message with valid username but incorrect password', async ({ page }) => {
    await page.locator('#username').fill(testData.wrongPasswordUser.username);
    await page.locator('#password').fill(testData.wrongPasswordUser.password);
    await page.locator('#submit').click();

    const errorAlert = page.locator('#error');
    await expect(errorAlert).toBeVisible();
    await expect(errorAlert).toHaveText(testData.wrongPasswordUser.errorMessage);
  });

  test('TC04: Verify error handling when submitting entirely empty fields', async ({ page }) => {
    await page.locator('#username').fill(testData.emptyUser.username);
    await page.locator('#password').fill(testData.emptyUser.password);
    await page.locator('#submit').click();

    const errorAlert = page.locator('#error');
    await expect(errorAlert).toBeVisible();
    await expect(errorAlert).toHaveText(testData.emptyUser.errorMessage);
  });

  test('TC05: Verify user can log out successfully after an authenticated session', async ({ page }) => {
    test.setTimeout(60000);
    await page.locator('#username').fill(testData.validUser.username);
    await page.locator('#password').fill(testData.validUser.password);
    await page.locator('#submit').click();
    await page.waitForURL(testData.validUser.expectedSuccessUrl);

    const logoutButton = page.getByRole('link', { name: 'Log out' });
    await expect(logoutButton).toBeVisible();
    await logoutButton.click();

    await page.waitForURL(testData.baseUrl);
    await expect(page.locator('#username')).toBeVisible();
  });

  // --- UI & STATE VALIDATION TESTS ---

  test('TC06: Verify core form input elements are fully visible on page load', async ({ page }) => {
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#submit')).toBeVisible();
  });

  test('TC07: Verify login page meta title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Test Login/);
  });

  test('TC08: Verify login section header text content matches specifications', async ({ page }) => {
    const heading = page.locator('h2:text("Test login")');
    await expect(heading).toBeVisible(); 
  });

  test('TC09: Verify password input field masking for security compliance', async ({ page }) => {
    const passwordField = page.locator('#password');
    await expect(passwordField).toHaveAttribute('type', 'password');
  });

  test('TC10: Verify username field retains typed input correctly', async ({ page }) => {
    const usernameField = page.locator('#username');
    await usernameField.fill(testData.validUser.username);
    await expect(usernameField).toHaveValue(testData.validUser.username);
  });

});