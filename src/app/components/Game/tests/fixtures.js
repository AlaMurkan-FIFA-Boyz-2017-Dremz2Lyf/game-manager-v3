export const created = {
  id: '1',
  status: 'created',
  home: {
    team: null,
    team_url: null,
    player: {
      id: '21',
      name: 'Agustin',
    },
  },
  away: {
    team: null,
    team_url: null,
    player: {
      id: '12',
      name: 'Scott',
    },
  },
};

export const started = {
  id: '2',
  status: 'started',
  home: {
    team: 'Tottenham Hotspur',
    team_url: 'http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg',
    player: {
      id: '12',
      name: 'Scott',
    },
  },
  away: {
    team: 'The Manure',
    team_url: 'http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg',
    player: {
      id: '21',
      name: 'Agustin',
    },
  },
};

export const finished = {
  id: '3',
  status: 'finished',
  home: {
    'team': 'Tottenham Hotspur',
    'team_url': 'http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg',
    'player': {
      id: '12',
      name: 'Scott',
    },
    'score': 0,
    'shots': 7,
    'shots on target': 1,
    'possession %': 37,
    'tackles': 7,
    'fouls': 7,
    'yellow cards': 1,
    'red cards': 0,
    'injuries': 0,
    'offsides': 0,
    'corners': 0,
    'shot accuracy %': 14,
    'pass accuracy %': 77,
  },
  away: {
    'team': 'The Manure',
    'team_url': 'http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg',
    'player': {
      id: '21',
      name: 'Agustin',
    },
    'score': 4,
    'shots': 12,
    'shots on target': 7,
    'possession %': 63,
    'tackles': 2,
    'fouls': 1,
    'yellow cards': 0,
    'red cards': 0,
    'injuries': 1,
    'offsides': 0,
    'corners': 2,
    'shot accuracy %': 58,
    'pass accuracy %': 84,
  },
};

const games = [created, started, finished];

export default games;
