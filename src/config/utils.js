const min = (field, length) => {
  if (field && length && field.length >= length) return true;
  else return false;
};

const max = (field, length) => {
  if (field && length && field.length <= length) return true;
  else return false;
};

module.exports = { min };

const name = "";
console.log(min(name, 8));
