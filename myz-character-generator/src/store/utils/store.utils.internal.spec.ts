import { Role } from '../../models';
import { addAttributes, buildBaseInfo } from './store.utils.internal';
import {} from 'jest/';

describe('buildBaseInfo', () => {
  it('should generate random name when isNameTouched is false', () => {
    const name = 'Previous random name';
    const result = buildBaseInfo(
      { name, role: expect.anything() },
      { isNameTouched: false }
    );

    expect(result.description.name.length).toBeGreaterThan(0);
    expect(result.description.name).not.toEqual(name);
  });

  it('should keep same name when isNameTouched is false', () => {
    const name = 'Name modified by user';
    const result = buildBaseInfo(
      { name, role: expect.anything() },
      { isNameTouched: true }
    );

    expect(result.description.name).toEqual(name);
  });

  it('should return the same role if provided', () => {
    let role = Role.BOSS;
    const resultBoss = buildBaseInfo(
      { name: expect.anything(), role },
      { ...expect.anything() }
    );

    expect(resultBoss.role).toEqual(role);

    role = Role.CHRONICLER;
    const resultChronicler = buildBaseInfo(
      { name: expect.anything(), role },
      { ...expect.anything() }
    );

    expect(resultChronicler.role).toEqual(role);
  });
});

describe('addAttributes', () => {
  it('should add random attributes to the object', () => {
    const current = { role: Role.BOSS };

    const result = addAttributes(current);

    expect(typeof result.attributes.agility === 'number').toBeTruthy();
    expect(typeof result.attributes.empathy === 'number').toBeTruthy();
    expect(typeof result.attributes.strength === 'number').toBeTruthy();
    expect(typeof result.attributes.wits === 'number').toBeTruthy();
  });
});
