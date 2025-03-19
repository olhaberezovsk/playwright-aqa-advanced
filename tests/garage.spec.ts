import { test, expect } from './fixtures/fixtures';  
test('Garage Page should be visible after login', async ({ userGaragePage }) => {
  
  await expect(userGaragePage).toHaveURL('https://qauto.forstudy.space/panel/garage');
  await expect(userGaragePage.locator('h1')).toHaveText('Garage'); 
});