import { test, expect } from '@playwright/test';
import { BookingPage } from '../pages/BookingPage';

test('user can Book Hotel', async ({ page }) => {
  const book = new BookingPage(page);
  await book.goto('');
  const { checkIn, checkOut } = await book.bookingHotel(['25/06/2025','27/07/2025']);
  expect(checkIn).toBe('25/06/2025');
  expect(checkOut).toBe('27/07/2025');
});