function createQuery(query) {
  const regexList = [
    {
      regex: /\[/g,
      replacement: ' { ',
    },
    {
      regex: /\]/g,
      replacement: ' } ',
    },
    {
      regex: /\"|\:/g,
      replacement: ' ',
    },
  ];

  const newQuery = Object.keys(query).map((key) => {
    const prefix = key;

    if (Array.isArray(query[key])) {
      const queryString = JSON.stringify(query[key]);
      const newQueryString = queryString.multiReplace(regexList);
      return `${prefix} ${newQueryString}`;
    }

    const newQuery = createQuery(query[key]).join('');

    return `${prefix} { ${newQuery} }`;
  });

  return newQuery;
}

export default function generateQuery({ query, params }) {
  const newQuery = createQuery(query);
  return JSON.stringify({
    query: `query { ${newQuery} }`,
    params,
  });
}

String.prototype.multiReplace = function (regexList) {
  return regexList.reduce((acc, { regex, replacement }) => {
    return acc.replace(regex, replacement);
  }, this);
};
