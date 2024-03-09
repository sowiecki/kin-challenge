import { genMockPolicyNumber, genMockFile } from './mocks/mock_policy';
import { transformNumberToOCR } from './mocks/mock_ocr';
import transformOCRToNumber from './utils/transformOCRToNumber';
import parseOCRFile from './utils/parseOCRFile';
import checksum from './utils/checksum';
import reportScannedPolicyNumbers from './report';

const mockPolicyNumber = genMockPolicyNumber();
const mockOCRPolicyNumber = transformNumberToOCR(mockPolicyNumber);

console.log('__________User Story 1__________');

console.log('↓ Randomly generated OCR\'ed policy number ↓');
console.log(mockOCRPolicyNumber.join('\n'));

console.log('\n')

console.log('↓ That same policy number, parsed from OCR to number ↓');
console.log(transformOCRToNumber(mockOCRPolicyNumber));

console.log('__________User Story 2__________');

console.log(`↓ Checksum validation on ${transformOCRToNumber(mockOCRPolicyNumber)} ↓`);
console.log(checksum(transformOCRToNumber(mockOCRPolicyNumber)));

console.log('__________User Story 3__________');

const outputSize = process.env.npm_config_output_size ? parseInt(process.env.npm_config_output_size, 10) : 50;
const mockFile = genMockFile(outputSize);

if (process.env.npm_config_verbose_mocks) {
  console.log(mockFile);
}
console.log(reportScannedPolicyNumbers(parseOCRFile(mockFile)));

export default parseOCRFile;
