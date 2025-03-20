import { test, expect } from '@playwright/test';

test('Intercept /profile response, verify UI', async ({ page, context }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space');
    await page.click('.btn-outline-white');
    await page.fill('#signinEmail', 'aqa-test@mailinator.com');
    await page.fill('#signinPassword', 'Test12345');
    await page.click('button.btn-primary:nth-child(2)');
    await page.waitForSelector('.sidebar_btn-group', { timeout: 15000 });

    await page.goto('https://qauto.forstudy.space/panel/profile');
    await page.route('**/api/profile', async (route) => {
        const fakeProfile = {
            status: 'ok',
            data: {
                userId: 12345,
                photoFilename: 'default-user.png',
                name: 'Test',
                lastName: 'API',
            }
        };
        await route.fulfill({ json: fakeProfile });
    });

    await context.clearCookies();
    await page.evaluate(() => localStorage.clear());
    await page.evaluate(() => sessionStorage.clear());
    await page.reload({ waitUntil: 'networkidle' }); //при релоуді вилогінює, без нього просто нічого не оновлює

    await expect(page.locator('.profile_name')).toHaveText('Test API');
});