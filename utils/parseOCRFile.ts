import transformOCRToNumber from './transformOCRToNumber';


/**
 * Each policy number is 108 characters, however the last 27 characters are blank space,
 * therefore this runs the first 81 characters through transformOCRToNumber and ignore last 27
 * @return string[]
 */
const parseOCRFile = (scannedFile: string) => {
  const splitScannedFile = scannedFile.split('\n');
  const parsedOCRPolicyNumbers = [];
  for (let i = 0; i < splitScannedFile.length; i += 4) {
    const currentSegments = splitScannedFile.slice(i, i + 81);

    parsedOCRPolicyNumbers.push(transformOCRToNumber(currentSegments));
  }

  return parsedOCRPolicyNumbers;
};

export default parseOCRFile;
