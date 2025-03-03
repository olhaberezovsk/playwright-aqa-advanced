import { expect } from '@playwright/test';

export class RegistrationForm {
    constructor(page) {
        this.page = page;
        this.nameInput = page.locator('#signupName');
        this.lastNameInput = page.locator('#signupLastName');
        this.emailInput = page.locator('#signupEmail');
        this.passwordInput = page.locator('#signupPassword')
        this.repeatPasswordInput = page.locator('#signupRepeatPassword');
        this.registerButton = page.locator('button.btn-primary:has-text("Register")'); //button.btn:nth-child(1)
        this.invalidName = page.locator('.invalid-feedback > p:nth-child(1)');
        this.invalidLastName = page.locator('.invalid-feedback');
        this.invalidPassword = page.locator('div.form-group:nth-child(4) > div:nth-child(3)');
        this.passwordMismatch = page.locator('.invalid-feedback > p:nth-child(1)');
    }

    async openRegistrationForm () {
        await this.page.goto('https://guest:welcome2qauto@qauto.forstudy.space');
        await this.page.click('.btn-outline-white');
        await this.page.click('button.btn:nth-child(1)');
    }

    async fillRegisterForm(name, lastName, email, password, repeatPassword) {
        await this.nameInput.fill(name);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.repeatPasswordInput.fill(repeatPassword);
        
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

}