import { test as setup } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config(); 
const BASE_URL = process.env.BASE_URL || 'https://qauto.forstudy.space';
const HTTP_USERNAME = process.env.HTTP_USERNAME || 'guest';
const HTTP_PASSWORD = process.env.HTTP_PASSWORD || 'welcome2qauto';
setup('Authenticate and save storage state', async ({ page }) => {
    
    const authUrl = `https://${HTTP_USERNAME}:${HTTP_PASSWORD}@${BASE_URL.replace(/^https?:\/\//, '')}`;
    await page.goto(authUrl);
    
    await page.fill('#signinEmail', 'aqa-test@mailinator.com');
    await page.fill('#signinPassword', 'Test12345');
    await page.click('button.btn-primary:has-text("Sign In")');
    
    await page.waitForURL(`${BASE_URL}/garage`);
    
    await page.context().storageState({ path: 'storageState.json' });
});