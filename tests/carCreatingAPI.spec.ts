// import { test, expect } from '@playwright/test';

// test.describe('Car creation tests', () => {

//   let context;
//   let page;
//   let api;

//   test.beforeEach(async ({ browser }) => {
//     context = await browser.newContext();
//     page = await context.newPage();
//     await page.goto('https://guest:welcome2qauto@qauto.forstudy.space');
//     await page.click('.btn-outline-white');
//     await page.fill('#signinEmail', 'aqa-test@mailinator.com');
//     await page.fill('#signinPassword', 'Test12345');
//     await page.click('button.btn-primary:nth-child(2)');
//     await page.waitForSelector('.sidebar_btn-group', { timeout: 15000 });

//     api = context.request;
//   });

//   test('Positive Case - Car Creating', async () => {
//     const carData = {
//       carBrandId: 1,
//       carModelId: 1,
//       mileage: 122,
//     };

//     const response = await api.post('https://qauto.forstudy.space/api/cars', {
//       data: carData,
//     });

//     expect(response.status()).toBe(201);
//     const responseData = await response.json();
//     expect(responseData.status).toBe('ok');
//     expect(responseData.data.carBrandId).toBe(carData.carBrandId);
//     expect(responseData.data.carModelId).toBe(carData.carModelId);
//     expect(responseData.data.mileage).toBe(carData.mileage);
//     expect(responseData.data.brand).toBe('Audi');
//     expect(responseData.data.model).toBe('TT');
//   });
//   test('Negative Case - Car Creating with missing carBrandId', async () => {

//     const carData = {
//       // carBrandId is missing
//       carModelId: 1,
//       mileage: 122,
//     };

//     const response = await api.post('https://qauto.forstudy.space/api/cars', {
//       data: carData,
//     });

//     expect(response.status()).toBe(400);
//     const responseData = await response.json();
//     expect(responseData.message).toBe('Car brand id is required');
//   });

//   test('Negative Case - Car Creating with invalid mileage', async () => {
//     const carData = {
//       carBrandId: 1,
//       carModelId: 1,
//       mileage: -10,
//     };
    
//     const response = await api.post('https://qauto.forstudy.space/api/cars', {
//       data: carData,
//     });

//     expect(response.status()).toBe(400);
//     const responseData = await response.json();
//     expect(responseData.message).toBe('Mileage has to be from 0 to 999999');
//   });
// });