import { test, expect } from '@playwright/test';
import { BookingPage } from '../pages/BookingPage';

test('user can Book Hotel', async ({ page }) => {
  const book = new BookingPage(page);
  await book.goto();
  await book.bookingHotel('25/06/2025','27/07/2025');
 // expect(token).toBeTruthy(); 
});