const titleCaseHelper = word =>
  word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();

export const titleCase = text =>
  text
    .split(/[_\s]/gi)
    .map(word => titleCaseHelper(word))
    .join(' ');