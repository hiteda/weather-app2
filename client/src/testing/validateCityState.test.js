import validateCityState from '../utils/validateCityState';

test('valid city, states', () => {
    expect(validateCityState('Portland, OR')).toBe(true);
    expect(validateCityState('dickshooter, id')).toBe(true);
    expect(validateCityState('New Braunfels, tx')).toBe(true);
    expect(validateCityState('nospace,es')).toBe(true);
});

test('invalid city, states', () => {
    expect(validateCityState('This string is totally invalid')).toBe(false);
    expect(validateCityState('city, state')).toBe(false);
    expect(validateCityState('city.com, ST')).toBe(false);
    expect(validateCityState('c1ty,st')).toBe(false);
    expect(validateCityState('')).toBe(false);
});