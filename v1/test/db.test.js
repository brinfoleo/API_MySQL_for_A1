const db=require('../db');

 test('Test connection with MySQL.', async () => {
    expect(await db()).toBe('<Connected>');
  });