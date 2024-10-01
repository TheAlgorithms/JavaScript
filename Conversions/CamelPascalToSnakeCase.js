/**
 *  Transforms a camelCase (or PascalCase) string to snake_case
 * @param {string} inputStr camelCase or PascalCase string
 * @returns { string } snake_case string
 */

function camelPascalToSnakeCase(inputStr) {
  if (typeof inputStr !== "string") {
      throw new Error(`Expected string as input, found ${typeof inputStr}`);
  }

  let snakeStr = "";
  let lastCharWasLower = false;

  for (let index = 0; index < inputStr.length; index++) {
      const char = inputStr[index];

      if (/[A-Z]/.test(char) && (!lastCharWasLower || (index > 0 && /[a-z0-9]/.test(inputStr[index - 1])))) {
          if (index > 0 && inputStr[index - 1] !== "_") {
              snakeStr += "_";
          }
          snakeStr += char.toLowerCase();
          lastCharWasLower = false;
      } else if (/[a-z0-9]/.test(char)) {
          snakeStr += char;
          lastCharWasLower = /[a-z]/.test(char);
      } else {
          snakeStr += "_";
          lastCharWasLower = false;
      }
  }

  // Remove leading underscore
  if (snakeStr[0] === "_") {
      snakeStr = snakeStr.substring(1);
  }

  return snakeStr;
}

export { camelPascalToSnakeCase }
