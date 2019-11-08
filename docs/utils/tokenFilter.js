export function filterByTypeGroupByCategory(data, filter) {
  const noResults = [];
  const filteredTokens = Object.keys(data).reduce((acc, curr) => {
    const type = data[curr].type || null;
    const category = data[curr].category || "misc";
    if (type === filter) {
      if (!acc.hasOwnProperty(category)) {
        acc[category] = [];
      }
      acc[category].push(data[curr]);
    }
    return acc;
  }, {});

  const categories = Object.keys(filteredTokens);

  if (categories.length === 1) {
    return filteredTokens[categories[0]];
  } else if (categories.length === 0) {
    return noResults;
  }

  return filteredTokens;
}

// also @see https://github.com/salesforce-ux/theo#supported-categories
// for Theo-supported categories
export function filterByCategory(data, filter) {
  const filteredTokens = Object.keys(data).reduce((acc, curr) => {
    const category = data[curr].category || null;
    if (category === filter) {
      acc.push(data[curr]);
    }
    return acc;
  }, []);

  return filteredTokens;
}