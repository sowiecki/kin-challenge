// For reference, as apparently formatted in the challenge
// Added a 0 to abide by "range 0-9" rule
const BASE_TEST_SEQUENCE =
`
 _   _  _     _  _ _  _  _
| || _| _||_||_ |_  ||_||_|
|_|||_  _|  | _||_| ||_| _|
`;

interface ScannedNumber {
  [key: string]: string[]
}

export const CHARS_PER_OCR_LINE = 27;

// Manually deconstructed scanned numbers, to avoid issues with whitespacing and new lines
export const SCANNED_NUMBERS_MAP: ScannedNumber = {
  '0': [' _ ', '| |', '|_|'],
  '1': ['   ', '  |', '  |'],
  '2': [' _ ', ' _|', '|_ '],
  '3': [' _ ', ' _|', ' _|'],
  '4': ['   ', '|_|', '  |'],
  '5': [' _ ','|_ ', ' _|'],
  '6': [' _ ', '|_ ', '|_|'],
  '7': [' _ ', '  |', '  |'],
  '8': [' _ ', '|_|', '|_|'],
  '9': [' _ ', '|_|', ' _|'],
  '\n': [' ', ' ', ' ']
};

// Prints all digits to ensure correct formatting visually in console
export const visualNumberCheck = new Array(Object.keys(SCANNED_NUMBERS_MAP).length).fill(0).map((_, index) => {
  if (SCANNED_NUMBERS_MAP[`${index}`]) {
    return SCANNED_NUMBERS_MAP[index].join('\n');
  }

  return;
}).join('\n');
