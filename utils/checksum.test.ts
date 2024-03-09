import checksum from './checksum';

describe('checksum', () => {
  it('should validate the checksum of a policy number.', () => {
    const validPolicyNumber = 345882865;
    const invalidPolicyNumber = 100000000;

    expect(checksum(validPolicyNumber)).toEqual(true);
    expect(checksum(invalidPolicyNumber)).toEqual(false);
  });
});
