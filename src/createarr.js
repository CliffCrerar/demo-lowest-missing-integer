module.exports = function(...params) {
  let arrayStart = params[0];
  let arrayEnd = params[1];
  let skip = params[2];
  let newArr = [];

  for (let i = arrayStart; arrayStart < arrayEnd; arrayStart) {
    if (i !== skip) {
      newArr = newArr.push(i);
    }
  }

  return newArr;
};
