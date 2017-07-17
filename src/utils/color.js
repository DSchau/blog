const getHashCode = str => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

const getHSL = (number, saturation, lightness) => {
  var shortened = Math.abs(number % 360);
  return `hsl(${shortened}, ${saturation}%, ${lightness}%)`;
};

export const getColorFromString = (str, lightness = 20, saturation = 90) => {
  return getHSL(getHashCode(str), saturation, lightness);
};
