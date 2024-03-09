import { SCANNED_NUMBERS_MAP } from '../constants';

/**
 * Utilities for mocking OCR'ed policy lines, entries, and files
 * To be used to easily generate OCR samples which can be tested against
 */

// Combines individual OCR digits into the same "readable line" (actually 3 lines)
export const combineDigits = (...digits: any) => digits
  .reduce((acc: string, currentVal: string) => ([
    `${acc[0]}${currentVal[0]}`,
    `${acc[1]}${currentVal[1]}`,
    `${acc[2]}${currentVal[2]}`,
  ]));

export const transformNumberToOCR = (entry: number) => combineDigits(
  ...`${entry}`
    .split('')
    .map((char: string) => SCANNED_NUMBERS_MAP[char])
);
