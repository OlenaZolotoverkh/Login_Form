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



