import 'dotenv/config';

const Config = {
  // Get the regular expression pattern from an environment variable or default to empty string if there is no environment variable
  CONTROL_CODE_REGEX: process.env.CONTROL_CODE_REGEX || '//(.*?)\n',
  DEFAULT_DELIMITER: process.env.DELIMITER || ',',
  ERRORS: {
    NEGATIVES_NOT_ALLOWED: 'Negatives not allowed.',
  },
  MAX_NUMBER:
    process.env.MAX_NUMBER != undefined
      ? parseInt(process.env.MAX_NUMBER)
      : 1000,
};

export default Config;
