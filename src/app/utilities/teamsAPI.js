const baseUrl = 'http://api.football-data.org/v1/competitions/';

const headers = new Headers({
  'X-Auth-Token': process.env.X_AUTH_TOKEN,
});
const options = {
  method: 'GET',
  headers,
  mode: 'cors',
};

export const getCompetitions = () => fetch(`${baseUrl}?season=2017`, options)
  .then(res => res.json());

export const getTeams = compId => fetch(`${baseUrl}${compId}/teams`, options).then(res => res.json());
