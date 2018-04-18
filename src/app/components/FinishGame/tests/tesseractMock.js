
const scoreResult = {
  lines: [
    { text: '0 4↵↵' },
  ],
};

const statsResult = {
  lines: [
    { text: '7 Shots 12↵↵' },
    { text: '1 Shots on Target 7↵' },
    { text: '37% Possession % 63%↵↵' },
    { text: '7 Tackles 2↵↵' },
    { text: '7 Fouls 1↵↵' },
    { text: '1 Yellow Cards 0↵↵' },
    { text: '0 Red Cards 0↵↵' },
    { text: '0 Injuries 1↵↵' },
    { text: '0 Offsides 0↵↵' },
    { text: '0 Corners 2↵' },
    { text: '14% Shot Accuracy % 58%↵' },
    { text: '77% Pass Accuracy % 84%↵↵' },
  ],
};


// [
//   [],
//   [
//     '7 Shots 12↵↵',
//     '1 Shots on Target 7↵',
//     '37% Possession % 63%↵↵',
//     '7 Tackles 2↵↵',
//     '7 Fouls 1↵↵',
//     '1 Yellow Cards 0↵↵',
//     '0 Red Cards 0↵↵',
//     '0 Injuries 1↵↵',
//     '0 Offsides 0↵↵',
//     '0 Corners 2↵',
//     '14% Shot Accuracy % 58%↵',
//     '77% Pass Accuracy % 84%↵↵',
//   ],
// ];

export const combinedResults = {
  away: {
    'corners': 2,
    'fouls': 1,
    'injuries': 1,
    'offsides': 0,
    'pass accuracy %': 84,
    'possession %': 63,
    'red cards': 0,
    'score': 4,
    'shot accuracy %': 58,
    'shots': 12,
    'shots on target': 7,
    'tackles': 2,
    'yellow cards': 0,
  },
  home: {
    'corners': 0,
    'fouls': 7,
    'injuries': 0,
    'offsides': 0,
    'pass accuracy %': 77,
    'possession %': 37,
    'red cards': 0,
    'score': 0,
    'shot accuracy %': 14,
    'shots': 7,
    'shots on target': 1,
    'tackles': 7,
    'yellow cards': 1,
  },
};

class Progress {
  constructor(shouldError) {
    this.tick = 0;
    this.step = 0;
    this.status = 'recognizing text';
    this.shouldError = shouldError;
  }

  progress(callback) {
    while (this.tick < 100) {
      callback({
        status: this.status,
        progress: this.tick,
      });
      this.tick += 10;
    }
    return this;
  }

  catch = (callback) => {
    if (this.shouldError) {
      callback('tesseract [mock] has errored');
    }

    return statsResult;
  }
}

class Job {
  constructor(shouldError) {
    this.shouldError = shouldError;
  }
  recognize = (imageUrl, config) => new Progress(this.shouldError);

  terminate = () => {}
}

class TesseractMock {
  constructor({ shouldError }) {
    this.shouldError = shouldError;
  }

  create() {
    return new Job(this.shouldError);
  }
}
export default TesseractMock;
