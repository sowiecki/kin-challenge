import transformOCRToNumber from './transformOCRToNumber';


/**
 * @param {string} scannedFile - sets of policy numbers comprised of pipe character segments.
 *  Each policy number is comprised of 4 lines; 3 lines each 27-characters long, and 1 blank line.
 * @return {number[]} array of parsed policy numbers
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
