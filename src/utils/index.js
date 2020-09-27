/**
 * 'Convert' HTML character codes into 'real font characters'
 * @param {string} str - contains HTML character codes
 * @returns {string}
 */
export const decodeCharCodes = (str) => {
  const span = document.createElement("span");
  span.innerHTML = str;

  return span.innerHTML;
};
