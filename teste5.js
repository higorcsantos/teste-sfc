const searchCount = {};

const incrementCount = (name) => {
  if (searchCount[name]) {
    searchCount[name]++;
  } else {
    searchCount[name] = 1;
  }
};

const getSearchCount = (name) => {
  const count = searchCount[name] || 0;
  return { name, count };
};

module.exports = {
  incrementCount,
  getSearchCount,
};