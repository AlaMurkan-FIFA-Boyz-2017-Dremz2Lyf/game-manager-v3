/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

/*
  Copies micro-app.json file to the build folder
*/

const metadataFile = fs.readFileSync(path.resolve(__dirname, '../../micro-app.json'));
const metadata = JSON.parse(metadataFile);
const distFolder = path.resolve(__dirname, '../../client/dist/micro-apps/', metadata.name);
fs.readdir(distFolder, (err, files) => {
  if (err) {
    try{
      fs.mkdirSync(distFolder)
    } catch (e) {
      console.error(err.stack || err);
      console.log('Could not find build directory, have you run `npm run build`?');
      return;
    }
  }
  fs.writeFileSync(path.join(distFolder, 'micro-app.json'), metadataFile, 'utf8');
  console.log(`Successfully copied micro-app.json to ${path.join(distFolder, 'micro-app.json')}`);
});
