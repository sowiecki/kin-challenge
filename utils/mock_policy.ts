const CHARS_PER_POLICY = 9;
export const genMockPolicyNumber = () => parseInt(new Array(CHARS_PER_POLICY)
  .fill(0)
  .map(() => Math.floor(Math.random() * 9))
  .join(''), 10);
