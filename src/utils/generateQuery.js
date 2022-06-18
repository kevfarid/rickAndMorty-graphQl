export default function generateQuery({ query, variables, params }) {
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
    if (typeof query[key] === 'object') {
      generateQuery({ query: query[key], variables, params });
    }

    if (typeof query[key] === 'Array') {
      const queryString = JSON.stringify(query[key]);
      const newQueryString = queryString.multiReplace(regexList);
      return newQueryString;
    }
  });

  return {
    query,
    variables,
    params,
  };
}

String.prototype.multiReplace = function (regexList) {
  return regexList.reduce((acc, { regex, replacement }) => {
    return acc.replace(regex, replacement);
  }, this);
};
