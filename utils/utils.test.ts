/* eslint-env jest */
import { combineDigits, transformNumberToOCR } from './mock_ocr';
import { SCANNED_NUMBERS_MAP, CHARS_PER_OCR_LINE } from './constants';

describe('Mock utilities', () => {
  describe('combineDigits', () => {
    it('should combine scanned digits 9-0 into a console readable format.', () => {
      const combinedDigits = combineDigits(
        SCANNED_NUMBERS_MAP[9],
        SCANNED_NUMBERS_MAP[8],
        SCANNED_NUMBERS_MAP[7],
        SCANNED_NUMBERS_MAP[6],
        SCANNED_NUMBERS_MAP[5],
        SCANNED_NUMBERS_MAP[4],
        SCANNED_NUMBERS_MAP[3],
        SCANNED_NUMBERS_MAP[2],
        SCANNED_NUMBERS_MAP[1],
        SCANNED_NUMBERS_MAP[0]
      );
      const expectedResult = [
        ' _  _  _  _  _     _  _     _ ',
        '|_||_|  ||_ |_ |_| _| _|  || |',
        ' _||_|  ||_| _|  | _||_   ||_|'
      ].join('\n');

      expect(combinedDigits).toEqual(expectedResult);
    });
  });

  describe('transformNumberToOCR', () => {
    it('should transform a policy entry into mock scanned digits', () => {
      const mockPolicyNumber1 = 602072761;
      const mockPolicyNumber2 = 422327824;
      const mockPolicyNumber3 = 871857461;

      const expectedResult1 = [
        ' _  _  _  _  _  _  _  _    ',
        '|_ | | _|| |  | _|  ||_   |',
        '|_||_||_ |_|  ||_   ||_|  |'
      ];
      const expectedResult2 = [
        '    _  _  _  _  _  _  _    ',
        '|_| _| _| _| _|  ||_| _||_|',
        '  ||_ |_  _||_   ||_||_   |'
      ];
      const expectedResult3 = [
        ' _  _     _  _  _     _    ',
        '|_|  |  ||_||_   ||_||_   |',
        '|_|  |  ||_| _|  |  ||_|  |'
      ];

      expectedResult1.forEach((line) => {
        expect(line.length).toEqual(CHARS_PER_OCR_LINE);
      });

      expectedResult2.forEach((line) => {
        expect(line.length).toEqual(CHARS_PER_OCR_LINE);
      });

      expectedResult3.forEach((line) => {
        expect(line.length).toEqual(CHARS_PER_OCR_LINE);
      });

      expect(transformNumberToOCR(mockPolicyNumber1)).toEqual(expectedResult1.join('\n'));
      expect(transformNumberToOCR(mockPolicyNumber2)).toEqual(expectedResult2.join('\n'));
      expect(transformNumberToOCR(mockPolicyNumber3)).toEqual(expectedResult3.join('\n'));
    });
  });
});
