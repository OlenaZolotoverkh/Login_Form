import { test, expect } from '@playwright/test';
import { openPage, clickOnSignInBtn, clickOnLogInLink, fillLoginCredentials, loginUser, verifyUserIsLoggedIn } from '../steps/loginProcess';

    test('User should be able to log in with valid credentials on Engenious University', async ({ page }) => {
    await openPage(page, '/');
    await clickOnSignInBtn (page);
    await clickOnLogInLink (page);
    await fillLoginCredentials (page, "olena.zolotoverkh@ukr.net", "testsWork2025!");
    await loginUser (page);
    await verifyUserIsLoggedIn(page, "Olena Zolotoverkh");
});


