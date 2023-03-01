const formatDate = (date) => {
  const [month, day, year] = new Date(date).toLocaleDateString().split("/");
  return `${month}/${day}/${year}`;
};

const formatUrl = (url) => {
  const domain = new URL(url).hostname.replace('www.', '');
  return domain.split('.')[0];
};

const formatPlural = (word, amount) => {
  return amount !== 1 ? `${word}s` : word;
};

module.exports = { formatDate, formatUrl, formatPlural };
