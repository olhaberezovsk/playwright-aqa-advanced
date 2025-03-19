import { Page, test as base } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export const test = base.extend<{ userGaragePage: Page }>({
    userGaragePage: async ({ page }, use) => {
    const loginUrl = 'https://guest:welcome2qauto@qauto.forstudy.space';

    await page.goto(loginUrl);
    await page.click('button.header-link:nth-child(1)');
    
    await page.waitForSelector('h1');  
    await page.context().storageState({ path: 'storageState.json' });
    await use(page);
  }
});

export { expect } from '@playwright/test'