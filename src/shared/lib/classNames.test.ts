import { classNames } from "./classNames";

describe('classNames', () => {
  test('with only one param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    const expectedResult = 'someClass class1 class2';

    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expectedResult);
  });

  test('with additional classes and mods, all true', () => {
    const expectedResult = 'someClass class1 class2 hovered scrollable';

    expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expectedResult);
  });

  test('with additional classes and mods, not all true', () => {
    const expectedResult = 'someClass class1 class2 hovered';

    expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expectedResult);
  });

  test('with additional classes and mods, not all true', () => {
    const expectedResult = 'someClass class1 class2 hovered';

    expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expectedResult);
  });
});