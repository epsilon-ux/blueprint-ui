// Parses a string for '${}' (like template strings) and looks up the value of that key in the provided object
export const parseLookupString = (str, obj) => {
  return str.replace(
    /\${[^{}]*}/g,
    match =>
      obj[
        match.substring(2, match.length - 1).replace(/^['"]|['"]$/g, '') // Trims ${} and outer quotes
      ]
  );
};
