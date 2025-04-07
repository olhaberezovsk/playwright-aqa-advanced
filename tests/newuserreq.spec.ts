import { test, expect } from '@playwright/test';

test.describe('Registration Form Validation', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space');
        await page.click('.btn-outline-white');
        await page.click('button.btn:nth-child(1)');
    })

    test('Successful Registration', async ({page}) => {

        await page.fill('#signupName', 'Olha');
        await page.fill('#signupLastName', 'Berezovska');
        await page.fill('#signupEmail', 'aqa-test@mailinator.com');
        await page.fill('#signupPassword','Test12345');
        await page.fill('#signupRepeatPassword','Test12345');
        await page.click('button.btn:nth-child(1)');
    })

    test('Registration with Invalid Name: "Name is invalid" error message validation', async ({page}) => {

        await page.fill('#signupName', '1');
        await page.fill('#signupLastName', 'Berezovska');
        await page.fill('#signupEmail', 'aqa-test@mailinator.com');
        await page.fill('#signupPassword','Test12345');
        await page.fill('#signupRepeatPassword','Test12345');
        await page.click('.modal-footer');

        await expect(page.locator('.invalid-feedback > p:nth-child(1)')).toBeVisible();
        await expect(page.locator('button.btn:nth-child(1)')).toBeDisabled();
    })

    test('Registration with Invalid Last Name: "Last name is required" error message validation', async ({page}) => {

        await page.fill('#signupName', 'Olha');
        await page.fill('#signupLastName', '');
        await page.fill('#signupEmail', 'aqa-test@mailinator.com');
        await page.fill('#signupPassword','Test12345');
        await page.fill('#signupRepeatPassword','Test12345');
        await page.click('.modal-footer');

        await expect(page.locator('.invalid-feedback')).toBeVisible();
        await expect(page.locator('button.btn:nth-child(1)')).toBeDisabled();
    })

    test('Registration with No Data: "Register" button should be disabled', async ({page}) => {

        await page.fill('#signupName', '');
        await page.fill('#signupLastName', '');
        await page.fill('#signupEmail', '');
        await page.fill('#signupPassword','');
        await page.fill('#signupRepeatPassword','');
        await page.click('.modal-footer');

        await expect(page.locator('button.btn:nth-child(1)')).toBeDisabled();
    })

    test('Registration with Invalid Password: "Password has to be from 8 to 15 characters long..." error message validation', async ({page}) => {

        await page.fill('#signupName', 'Olha');
        await page.fill('#signupLastName', 'Berezovska');
        await page.fill('#signupEmail', 'aqa-test@mailinator.com');
        await page.fill('#signupPassword','Test1');
        await page.fill('#signupRepeatPassword','Test12345');
        await page.click('.modal-footer');

        await expect(page.locator('div.form-group:nth-child(4) > div:nth-child(3)')).toBeVisible();
        await expect(page.locator('button.btn:nth-child(1)')).toBeDisabled();
    })

    test('Registration with Invalid Password Matching: "Passwords do not match" error message validation', async ({page}) => {

        await page.fill('#signupName', 'Olha');
        await page.fill('#signupLastName', 'Berezovska');
        await page.fill('#signupEmail', 'aqa-test@mailinator.com');
        await page.fill('#signupPassword','Test12345');
        await page.fill('#signupRepeatPassword','Test98765');
        await page.click('.modal-footer');

        await expect(page.locator('.invalid-feedback > p:nth-child(1)')).toBeVisible();
        await expect(page.locator('button.btn:nth-child(1)')).toBeDisabled();
    })

})