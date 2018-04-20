
export const processStats = stats => (
  stats.reduce((results, line) => {
    const a = line.split(' ');
    const home = parseInt(a.shift(), 10);
    const away = parseInt(a.pop(), 10);
    const stat = a.join(' ').toLowerCase();
    results.home[stat] = home;
    results.away[stat] = away;
    return results;
  }, { home: {}, away: {} })
);

export const processScore = scores => (
  {
    home: {
      score: parseInt(scores[0].split(' ')[0], 10),
    },
    away: {
      score: parseInt(scores[0].split(' ')[1], 10),
    },
  }
);

export const combineResults = (results) => {
  const { home: homeScore, away: awayScore } = processScore(results[0]);
  const { home: homeStats, away: awayStats } = processStats(results[1]);
  const home = { ...homeScore, ...homeStats };
  const away = { ...awayScore, ...awayStats };
  return { home, away };
};

export const imageFetcher = (baseUrl, hashtag) => (
  fetch(`${baseUrl}${hashtag}`)
    .then(response => response.json())
);

export * from './teamsAPI';
