import { genMockPolicyNumber } from './utils/mock_policy';
import { transformNumberToOCR } from './utils/mock_ocr';
import transformOCRToNumber from './utils/transformOCRToNumber';

const mockPolicyNumber = genMockPolicyNumber();
const mockOCRPolicyNumber = transformNumberToOCR(mockPolicyNumber);

console.log('↓ Randomly generated OCR\'ed policy number ↓');
console.log(mockOCRPolicyNumber.join('\n'));

console.log('\n')

console.log('↓ That same policy number, parsed from OCR to number ↓');
console.log(transformOCRToNumber(mockOCRPolicyNumber));

console.log('Run `npm run test` to test more numbers!')
