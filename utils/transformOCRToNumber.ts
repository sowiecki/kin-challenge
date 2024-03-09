import { SCANNED_NUMBERS_MAP } from './constants';

/**
 * Takes a single segmented digit of 3 lines and outputs its matching number
 */
const mapDigit = (entryLines: string[]) => (_: string, index: number) => {
  const lineIndex = index * 3;
  const nextLineIndex = lineIndex + 3;

  const parsedSegments = [
    entryLines[0].slice(lineIndex, nextLineIndex),
    entryLines[1].slice(lineIndex, nextLineIndex),
    entryLines[2].slice(lineIndex, nextLineIndex),
  ];

  const foundIndex = Object.values(SCANNED_NUMBERS_MAP).findIndex((array: string[]) => JSON.stringify(array) === JSON.stringify(parsedSegments));

  return foundIndex;
};


const transformOCRToNumber = (entry: string) => {
  const entryLines = entry.split('\n');

  const digits = new Array(9).fill(null).map(mapDigit(entryLines));

  return parseInt(digits.join(''), 10);
};

export default transformOCRToNumber;
