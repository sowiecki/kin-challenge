import { SCANNED_NUMBERS_MAP } from '../constants';

/**
 * Takes a single segmented digit of 3 lines and outputs its matching number
 * @return {number} index for SCANNED_NUMBERS_MAP of matching digit
 */
const mapDigit = (entryLines: string[]) => (_: string, index: number) => {
  const lineIndex = index * 3;
  const nextLineIndex = lineIndex + 3;

  const parsedSegments = [
    entryLines[0]?.slice(lineIndex, nextLineIndex),
    entryLines[1]?.slice(lineIndex, nextLineIndex),
    entryLines[2]?.slice(lineIndex, nextLineIndex),
  ];
  const stringifiedParsedSegments = JSON.stringify(parsedSegments);
  const foundIndex = Object.values(SCANNED_NUMBERS_MAP).findIndex((array: string[]) => JSON.stringify(array) === stringifiedParsedSegments);

  return foundIndex === -1 ? '?' : foundIndex;
};

/**
 * @param {string[]} entry
 * @return {string[]}
 */
const transformOCRToNumber = (entry: string[]) => {
  const entryLines = entry;
  const digits = new Array(9).fill(null).map(mapDigit(entryLines)).join('');

  return digits;
};

export default transformOCRToNumber;
