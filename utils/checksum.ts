const checksum = (policyNumber: number) => {
  const policyDigits: number[] = `${policyNumber}`.split('').map((digit: string) => parseInt(digit, 10));

  return (
    policyDigits[policyDigits.length - 1] +
    (2 * policyDigits[policyDigits.length - 2]) +
    (3 * policyDigits[policyDigits.length - 3]) +
    (4 * policyDigits[policyDigits.length - 4]) +
    (5 * policyDigits[policyDigits.length - 5]) +
    (6 * policyDigits[policyDigits.length - 6]) +
    (7 * policyDigits[policyDigits.length - 7]) +
    (8 * policyDigits[policyDigits.length - 8]) +
    (9 * policyDigits[policyDigits.length - 9])
  ) % 11 === 0;
};

export default checksum;
