
export const processStats = stats => (
  stats.reduce((results, line) => {
    const a = line.split(' ');
    const home = parseInt(a.shift(), 10);
    const away = parseInt(a.pop(), 10);
    const stat = a.join(' ').toLowerCase();
    results[stat] = {
      home,
      away,
    };
    return results;
  }, {})
);

export const processScore = scores => (
  {
    score: {
      home: parseInt(scores[0].split(' ')[0], 10),
      away: parseInt(scores[0].split(' ')[1], 10),
    },
  }
);

export const combineResults = results => (
  { ...processScore(results[0]), ...processStats(results[1]) }
);
