/**
 * Converts a string from snake_case to camelCase.
 *
 * @param {string} str - The input string in snake_case format.
 * @throws {Error} Will throw an error if the input is not a string.
 * @returns {string} The converted string in camelCase format.
 *
 * @example
 *
 * snakeToCamelCase("hello_world"); // Returns "helloWorld"
 * snakeToCamelCase("snake_case_example"); // Returns "snakeCaseExample"
 * snakeToCamelCase("_leading_underscore"); // Returns "leadingUnderscore"
 * snakeToCamelCase("trailing_underscore_"); // Returns "trailingUnderscore"
 * snakeToCamelCase("__multiple__underscores__"); // Returns "multipleUnderscores"
 * snakeToCamelCase("snake_case@example"); // Returns "snakeCaseExample"
 * snakeToCamelCase("_leading_underscore_#"); // Returns "leadingUnderscore"
 * snakeToCamelCase("trailing_underscore_&"); // Returns "trailingUnderscore"
 * snakeToCamelCase(""); // Returns ""
 *
 * @throws {Error} If the input is not a string.
 */
function snakeToCamelCase(str) {
  // Will throw an error if the input is not a string.
  if (typeof str !== 'string') {
    throw new Error(`Expected string as input, found ${typeof str}`)
  }

  if (str.trim() === '') return '' // Handle empty string

  // Remove special characters (excluding underscores)
  const cleanedStr = str.replace(/[^a-zA-Z0-9_]/g, '')

  return cleanedStr
    .split('_')
    .filter(Boolean)
    .map((value, index) => {
      return index === 0
        ? value
        : value.charAt(0).toUpperCase() + value.slice(1)
    })
    .join('')
}

export { snakeToCamelCase }
