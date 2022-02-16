import { foo } from './tests.ts';

test('test', () => {
  foo(1).then((value) => {
    expect(value).toBe(1);
  })
});
