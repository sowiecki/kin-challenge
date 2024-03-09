/* eslint-env jest */
import reportScannedPolicyNumbers from './report';
import parseOCRFile from './utils/parseOCRFile';

describe('reportScannedPolicyNumbers', () => {
  it(`should generate a report of policy numbers with results indicating illegible or erroneous characters`, () => {
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

    const expectedResult = [
      { policyNumber: '?8362007?', result: 'ILL' },
      { policyNumber: '543?74156', result: 'ILL' },
      { policyNumber: '1464?6525', result: 'ILL' },
      { policyNumber: '557128?3?', result: 'ILL' },
      { policyNumber: '708?7?444', result: 'ILL' }
    ];

    expect(reportScannedPolicyNumbers(parseOCRFile(mockFileWithErrors))).toEqual(expectedResult);
  });

  it(`should generate a report of policy numbers with results indicting passed checksums`, () => {
    const mockFileWithErrors = [
      ' _     _  _  _  _  _  _  _ ',
      ' _||_||_  _||_  _||_|  || |',
      ' _|  | _| _| _| _||_|  ||_|',
      '                           ',
      '             _     _     _ ',
      '|_|  |  ||_|| ||_|  |  |  |',
      '  |  |  |  ||_|  |  |  |  |',
      '                           ',
      ' _     _  _     _  _       ',
      '|_ |_||_||_||_| _| _||_|  |',
      ' _|  ||_||_|  | _| _|  |  |',
      '                           ',
    ].join('\n');

    const expectedResult = [
      { policyNumber: '345353870', result: null },
      { policyNumber: '411404717', result: null },
      { policyNumber: '548843341', result: null },
    ];

    expect(reportScannedPolicyNumbers(parseOCRFile(mockFileWithErrors))).toEqual(expectedResult);
  });
});
