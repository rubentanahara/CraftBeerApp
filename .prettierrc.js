module.exports = {
  arrowParens: 'always', // Always include parens around arrow function arguments for clarity, e.g., (x) => x
  bracketSameLine: false, // JSX brackets on a new line for better readability
  bracketSpacing: true, // Space between brackets and object literals, e.g., { foo: bar }
  singleQuote: true, // Use single quotes instead of double quotes
  trailingComma: 'es5', // Include trailing commas where valid in ES5 (objects, arrays, etc.)
  semi: true, // Always use semicolons to avoid ASI pitfalls
  printWidth: 80, // Wrap lines at 80 characters for better readability
  tabWidth: 2, // Use 2 spaces for indentation
  useTabs: false, // Use spaces instead of tabs for indentation
  jsxSingleQuote: true, // Use double quotes in JSX for consistency with HTML attributes
  jsxBracketSameLine: false, // Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line
  endOfLine: 'lf', // Line feed only (\n), handling new lines consistently across various environments
};
