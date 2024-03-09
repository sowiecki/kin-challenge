import { genMockPolicyNumber } from './utils/mock_policy';
import { transformNumberToOCR, combineDigits } from './utils/mock_ocr';
import transformOCRToNumber from './utils/transformOCRToNumber';
// import { SCANNED_NUMBERS_MAP } from './utils/constants';

const mockPolicyNumber = genMockPolicyNumber();

// console.log(mockPolicyNumber);
// console.log(transformNumberToOCR(mockPolicyNumber));
// console.log(combineDigits(SCANNED_NUMBERS_MAP['2'], SCANNED_NUMBERS_MAP['5'], SCANNED_NUMBERS_MAP['5'], SCANNED_NUMBERS_MAP['5']))

// console.log(transformOCRToNumber([
//   ' _  _  _  _ _  _ _  _   ',
//   '|_ | | _|| | | _| ||_  |',
//   '|_||_||_ |_| ||_  ||_| |'
// ].join('\n')));

console.log(transformOCRToNumber([
  ' _     _  _  _  _  _  _  _ ',
  '|_   || | _|| |  | _|  ||_ ',
  '|_|  ||_||_ |_|  ||_   ||_|'
].join('\n')));
