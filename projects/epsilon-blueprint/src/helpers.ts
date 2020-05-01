export function generateUniqueId() {
  return Math.floor(Math.random() * 1000);
}

// Parses a string for '#{}' (like template strings) and looks up the value of that key in the provided object
// CAUTION: Only call from within component markup ([name]-component.html). Oddly using this function within a component ts file will cause it to always use the same obj no matter what is passed to it.
export const parseLookupString = (str, obj) => {
  return str.replace(
    /\#{[^{}]*}/g,
    match =>
      obj[
        match.substring(2, match.length - 1).replace(/^['"]|['"]$/g, '') // Trims #{} and outer quotes
      ]
  );
};
