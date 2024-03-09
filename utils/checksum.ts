const checksum = (policyNumber: number) => {
  const policyDigits: number[] = `${policyNumber}`.split('').map((digit: string) => parseInt(digit, 10));

  return (
    policyDigits[8] +
    (2 * policyDigits[7]) +
    (3 * policyDigits[6]) +
    (4 * policyDigits[5]) +
    (5 * policyDigits[4]) +
    (6 * policyDigits[3]) +
    (7 * policyDigits[2]) +
    (8 * policyDigits[1]) +
    (9 * policyDigits[0])
  ) % 11 === 0;
};

export default checksum;
