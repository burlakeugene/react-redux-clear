import { foo } from './tests.ts';

describe('Test', () => {
  it('Is equal', async () => {
    await foo(1).then((value) => {
      expect(value).toBe(1);
    })
  })
});
