import checksum from './utils/checksum';
import { CHARS_PER_POLICY } from './constants';

/**
 * Outputs a report of each parsed policy number
 */
const reportScannedPolicyNumbers = (policyNumbers: number[]) => {
  const reportedNumbers: string[] = [];
  policyNumbers.forEach((policyNumber: number) => {
    if (`${policyNumber}`.length !== CHARS_PER_POLICY) {
      return `${policyNumber} : ILL`
    }

    const passedChecksum = checksum(policyNumber);
    const result = passedChecksum ? '' : 'ERR';

    reportedNumbers.push(`${policyNumber} ${result}`)
  });

  return reportedNumbers.join('\n');
};

export default reportScannedPolicyNumbers;
