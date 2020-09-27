export const decodeCharCodes = (str) => {
  const span = document.createElement("span");
  span.innerHTML = str;

  return span.innerHTML;
};
