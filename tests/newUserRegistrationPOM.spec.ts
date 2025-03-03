import { test, expect } from '@playwright/test';
import { RegistrationForm } from '../pages/RegistrationForm';

test.describe('Registration Form Validation', () => {

    let registrationForm;

    test.beforeEach(async ({page}) => {
        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space');
        registrationForm = new RegistrationForm(page);
        await registrationForm.openRegistrationForm();
    })

    test('Successful Registration', async ({page}) => {

        await registrationForm.fillRegisterForm('Olha', 'Berezovska', 'aqa-test@mailinator.com', 'Test12345', 'Test12345');
        await expect(registrationForm.registerButton).toBeEnabled();
        await registrationForm.clickRegisterButton();
    })

    test('Registration with Invalid Name: "Name is invalid" error message validation', async ({page}) => {

        await registrationForm.fillRegisterForm('1', 'Berezovska', 'aqa-test@mailinator.com', 'Test12345', 'Test12345');

        await expect(registrationForm.invalidName).toBeVisible();
        await expect(registrationForm.registerButton).toBeDisabled();
    })

    test('Registration with Invalid Last Name: "Last name is required" error message validation', async ({page}) => {

        await registrationForm.fillRegisterForm('Olha', '', 'aqa-test@mailinator.com', 'Test12345', 'Test12345');

        await expect(registrationForm.invalidLastName).toBeVisible();
        await expect(registrationForm.registerButton).toBeDisabled();
    })

    test('Registration with No Data: "Register" button should be disabled', async ({page}) => {

        await registrationForm.fillRegisterForm('', '', '', '', '');

        await expect(registrationForm.registerButton).toBeDisabled();
    })

    test('Registration with Invalid Password: "Password has to be from 8 to 15 characters long..." error message validation', async ({page}) => {

        await registrationForm.fillRegisterForm('Olha', 'Berezovska', 'aqa-test@mailinator.com', 'Test', 'Test12345');

        await expect(registrationForm.invalidPassword).toBeVisible();
        await expect(registrationForm.registerButton).toBeDisabled();
    })

    test('Registration with Invalid Password Matching: "Passwords do not match" error message validation', async ({page}) => {

        await registrationForm.fillRegisterForm('Olha', 'Berezovska', 'aqa-test@mailinator.com', 'Test12345', 'Test98765');
        await page.click('.modal-footer');

        await expect(registrationForm.passwordMismatch).toBeVisible();
        await expect(registrationForm.registerButton).toBeDisabled();
    })

})