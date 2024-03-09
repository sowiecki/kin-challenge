/* eslint-env jest */
import transformOCRToNumber from './transformOCRToNumber';

describe('Utilities', () => {
  describe('transformOCRToNumber', () => {
    it(`should transform an OCR'ed policy entry into a number`, () => {
      const mockOCR1 = [
        ' _     _  _  _  _  _  _  _ ',
        '|_   || | _|| |  | _|  ||_ ',
        '|_|  ||_||_ |_|  ||_   ||_|'
      ];
      const mockOCR2 = [
        '    _  _  _  _  _  _  _    ',
        '|_| _| _| _| _|  ||_| _||_|',
        '  ||_ |_  _||_   ||_||_   |'
      ];
      const mockOCR3 = [
        ' _  _     _  _  _     _    ',
        '|_|  |  ||_||_   ||_||_   |',
        '|_|  |  ||_| _|  |  ||_|  |'
      ];

      expect(transformOCRToNumber(mockOCR1)).toEqual(610207276);
      expect(transformOCRToNumber(mockOCR2)).toEqual(422327824);
      expect(transformOCRToNumber(mockOCR3)).toEqual(871857461);
    });
  });
});
