import { Selector } from 'testcafe';

fixture`Some description`.page`http://localhost:3000`;

test('Whatever', async (t: TestController) => {
  const firstNameInput = Selector('#firstName');

  await t.expect(2).eql(2);
});
