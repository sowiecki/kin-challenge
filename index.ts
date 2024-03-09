import { genMockPolicyNumber, genMockFile } from './mocks/mock_policy';
import { transformNumberToOCR } from './mocks/mock_ocr';
import transformOCRToNumber from './utils/transformOCRToNumber';
import parseOCRFile from './utils/parseOCRFile';
import checksum from './utils/checksum';
import reportScannedPolicyNumbers, { PolicyReport } from './report';

// Formats into plain text and hides the result if the policy number is good, as instructed by the user story
const formatToTemplate = ({ policyNumber, result }: PolicyReport) => `${policyNumber} ${result !== true ? result : ''}`;

const mockPolicyNumber = genMockPolicyNumber();
const mockOCRPolicyNumber = transformNumberToOCR(mockPolicyNumber);

console.log('\n\n__________User Story 1__________\n');

console.log('↓ Randomly generated OCR\'ed policy number ↓');
console.log(mockOCRPolicyNumber.join('\n'));

console.log('\n')

console.log('↓ That same policy number, parsed from OCR back into a number ↓');
console.log(transformOCRToNumber(mockOCRPolicyNumber));

console.log('\n\n__________User Story 2__________\n');

console.log(`↓ Checksum validation on ${transformOCRToNumber(mockOCRPolicyNumber)} ↓`);
console.log(checksum(parseInt(transformOCRToNumber(mockOCRPolicyNumber), 10)));

console.log('\n\n__________User Story 3__________\n');

const outputSize = process.env.npm_config_output_size ? parseInt(process.env.npm_config_output_size, 10) : 50;
const mockFile = genMockFile(outputSize);

if (process.env.npm_config_verbose_mocks) {
  console.log(mockFile);
}
console.log(reportScannedPolicyNumbers(parseOCRFile(mockFile)).map(formatToTemplate).join('\n'));

console.log('\n\n__________User Story 3 (continued, with illegible character checking)__________\n');

const mockFileWithErrors = [
' _  _  _  _  _  _  _  _    ',
'|_||_| _||_  _|| || |  ||_ ',
'  ||_| _||_||_ |_||_|  ||_|',
'                           ',
' _     _  _  _        _  _ ',
'|_ |_| _|  |  ||_|  ||_ |_ ',
' _|  | _||_|  |  |  | _||_|',
'                           ',
'       _     _  _  _  _  _ ',
'  ||_||_ |_|| ||_ |_  _||_ ',
'  |  ||_|  || ||_| _||_  _|',
'                           ',
' _  _  _     _  _  _  _    ',
'|_ |_   |  | _||_||_| _|   ',
' _| _|  |  ||_ |_||_  _|   ',
'                           ',
' _  _  _     _             ',
'  || ||_||_   ||_ |_||_||_|',
'  ||_||_| _|  ||_|  |  |  |',
'                            '
].join('\n');

if (process.env.npm_config_verbose_mocks) {
  console.log(mockFileWithErrors);
}

console.log(reportScannedPolicyNumbers(parseOCRFile(mockFileWithErrors)).map(formatToTemplate).join('\n'));

export default parseOCRFile;
