const searchCount = {};

const incrementCount = (name) => {
  if (searchCount[name]) {
    searchCount[name]++;
  } else {
    searchCount[name] = 1;
  }
};

const getSearchCount = (req, res) => {
  const { name } = req.query;
  const count = searchCount[name] || 0;
  res.status(200).json({ name, count });
};

module.exports = {
  incrementCount,
  getSearchCount,
};