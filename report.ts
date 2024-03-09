import checksum from './utils/checksum';
import { CHARS_PER_POLICY } from './constants';

enum Result {
  ILL = 'ILL',
  ERR = 'ERR'
}

interface PolicyReport {
  policyNumber: string;
  result: Result | null;
}

/**
 * Outputs a report of each parsed policy number
 * @return {string} report of policy numbers and their associated checksum results
 */
const reportScannedPolicyNumbers = (policyNumbers: string[]) => {
  const reportedNumbers: PolicyReport[] = [];
  policyNumbers.forEach((policyNumber: string) => {
    if (`${policyNumber}`.length !== CHARS_PER_POLICY) {
      return `${policyNumber} : ILL`
    }

    const containsIllegibleChars = policyNumber.includes('?');
    function genResult(): Result | null {
      if (containsIllegibleChars) {
        return Result['ILL'];
      } else if (checksum(parseInt(policyNumber, 10))) {
        return null;
      } else {
        // Contains all valid digits, but did not pass checksum
        // Some digits may have been misread by OCR
        return Result['ERR'];
      }
    };

    reportedNumbers.push({ policyNumber, result: genResult() });
  });

  return reportedNumbers;
};

export default reportScannedPolicyNumbers;
