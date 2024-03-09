/* eslint-env jest */
import parseOCRFile from './parseOCRFile';

describe('Utilities', () => {
  describe('parseOCRFile', () => {
    it(`should parse a file of scanned policy numbers`, () => {
      const mockScannedFile = [
        ' _     _  _  _  _  _  _  _ ',
        '|_   || | _|| |  | _|  ||_ ',
        '|_|  ||_||_ |_|  ||_   ||_|',
        '                           ',
        '    _  _  _  _  _  _  _    ',
        '|_| _| _| _| _|  ||_| _||_|',
        '  ||_ |_  _||_   ||_||_   |',
        '                           ',
        ' _  _     _  _  _     _    ',
        '|_|  |  ||_||_   ||_||_   |',
        '|_|  |  ||_| _|  |  ||_|  |'
      ].join('\n');

      expect(parseOCRFile(mockScannedFile)).toEqual(['610207276', '422327824', '871857461']);
    });
  });
});
