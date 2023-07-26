import { test, expect } from '@playwright/test';
const { signUp } = require('./playwright-helpers/signup-helpers.js');

test('Verify use can sign up a new account', async ({ page }) => {

    const userSignUp = new signUp(page);
    //test pull request
    const randomUsername = Math.random().toString(36).substring(2,7);
    console.log(randomUsername);
    const randomPassword = Math.random().toString(36).substring(2,7);
    console.log(randomPassword);
    await userSignUp.gotoSite();
    await userSignUp.signUpNewUser(randomUsername, randomPassword);
    await userSignUp.login(randomUsername,randomPassword);
    await expect(userSignUp.welcomeText).toHaveText('Welcome ' + randomUsername);
});











