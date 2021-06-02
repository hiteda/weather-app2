import locationString from '../utils/locationString';

test('valid city, states', () => {
    expect(locationString('Portland, OR')).toBe('Portland, OR');
    expect(locationString('dickshooter, id')).toBe('Dickshooter, ID');
    expect(locationString('New Braunfels, tx')).toBe('New Braunfels, TX');
    expect(locationString('nospace,es')).toBe('Nospace, ES');
    expect(locationString('london, united kingdom')).toBe('London, United Kingdom');
    expect(locationString('nEw york ciTy,nY')).toBe('New York City, NY');
});

test('invalid city, state', () => {
    expect(locationString('This string is totally invalid')).toBe('This String Is Totally Invalid, ');
});

test('empty city, state', () => {
    expect(locationString('')).toBe('');
});