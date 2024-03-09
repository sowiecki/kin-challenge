import { transformNumberToOCR } from './mock_ocr';
import { CHARS_PER_POLICY } from '../constants';

export const genMockPolicyNumber = () => parseInt(new Array(CHARS_PER_POLICY)
  .fill(0)
  .map(() => Math.floor(Math.random() * 10))
  .join(''), 10);

const EMPTY_LINE = ' '.repeat(27);
const NUMBER_OF_POLICY_NUMBERS = 50;
export const genMockFile = (length = NUMBER_OF_POLICY_NUMBERS) => new Array(length).fill(null).map(() => transformNumberToOCR(genMockPolicyNumber()).concat(EMPTY_LINE).join('\n')).join('\n');
