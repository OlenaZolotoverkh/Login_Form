import { Page } from 'playwright';
import {expect} from "@playwright/test";


export async function openPage(page:Page, path: string) {
    await page.goto(path);  // open url
}
export async function clickOnSignInBtn (page:Page) {
        const signInButton = page.getByRole('button', { name: /sign up \/ login/i });

        try {
            await expect(signInButton).toBeVisible({ timeout: 5000 }); // Check visibility
            await signInButton.click(); // Click on btn
        } catch (error) {
            throw new Error('Sign Up / Login button not found or not visible on the page.');
        }
}

export async function clickOnLogInLink (page:Page) {
    const loginLink = page.getByRole('link', { name: 'Login' });

    try {
        await expect(loginLink).toBeVisible({ timeout: 5000 }); // Check if link is visible
        await loginLink.click(); // Click on the login link
    } catch (error) {
        throw new Error('Login link not found or not visible on the page.');
    }
}

export async function fillLoginCredentials(page: Page, email: string, password: string) {
    //Find the email field and fill in the email address
    const emailInput = page.getByPlaceholder('Email');
    const passwordInput = page.getByPlaceholder('Password');

    // Wait for both inputs to be visible before interacting
    await expect(emailInput).toBeVisible({ timeout: 5000 });
    await expect(passwordInput).toBeVisible({ timeout: 5000 });

    // Fill provided credentials
    await emailInput.fill(email);
    await passwordInput.fill(password);
}

export async function loginUser(page: Page) {
    //Locate login button
    const loginButton = page.getByRole('button', { name: 'Login' });

    // Wait for button to be visible before interacting
    await expect(loginButton).toBeVisible({ timeout: 5000 });

    //Click on button
    await loginButton.click();
}

export async function verifyUserIsLoggedIn(page: Page, userName: string) {

    //Locate and open burger menu
    const burgerMenu = page.getByRole('button', { name: /open drawer/i });
    await expect(burgerMenu).toBeVisible({ timeout: 5000 });
    await burgerMenu.click();

    // Verify that the logged-in user's name are visible and matches expected name
    // to confirm successful login
    const userNameElement = page.getByText(userName);
    await expect(userNameElement).toBeVisible({ timeout: 5000 });
    await expect(userNameElement).toHaveText(userName);

    //  Verify logOut button is visible and matches expected name
    // to confirm successful login
    const logoutBtn = page.getByRole('button', { name: 'Logout' });
    await expect(logoutBtn).toBeVisible();
}

