export default function orderByProps(object, array) {
  const result = [];

  for (const prop in object) {
    if (Object.prototype.hasOwnProperty.call(object, prop) && !array.includes(prop)) {
      result.push({ key: prop, value: object[prop] });
    }
  }

  result.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (Object.prototype.hasOwnProperty.call(object, array[i])) {
      result.unshift({
        key: array[i],
        value: object[array[i]],
      });
    }
  }

  return result;
}
