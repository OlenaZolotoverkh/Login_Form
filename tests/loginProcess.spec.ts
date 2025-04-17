import { test, expect } from '@playwright/test';
import { openPage, clickOnSignInBtn, clickOnLogInLink } from '../steps/loginProcess';

test('Automate the login process on Engenious University', async ({ page }) => {
    // Open login form
    await openPage(page, '/');
    await clickOnSignInBtn (page);
    await clickOnLogInLink (page);


});
