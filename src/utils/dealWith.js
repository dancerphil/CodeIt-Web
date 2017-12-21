export default (str) => {
  if (!str) {
    console.log(`invalid str: ${str}`);
    return '\n';
  }
  // console.log(`dealing with: ${str}`);
  const l = str.length;
  if (l === 0) {
    // console.log('returns: \\r\\n');
    return '\n';
  }
  if (str.slice(l - 1, l) !== '\n') {
    // console.log('returns: raw + \\r\\n');
    return `${str}\n`;
  }
  // console.log('returns: raw');
  return str;
};
