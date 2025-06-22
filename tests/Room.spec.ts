import { test, expect } from '@playwright/test';
import { RoomPage } from '../pages/RoomPage';

test('user can view Room', async ({ page }) => {
  const room = new RoomPage(page);
  await room.goto('');
  await room.bookRoomType('Single','100')
});