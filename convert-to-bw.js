const sharp = require('sharp');

sharp('./public/images/projects/cultural-center.jpg')
  .grayscale()
  .toFile('./public/images/projects/cultural-center-bw.jpg')
  .then(() => console.log('Done! cultural-center-bw.jpg created'))
  .catch(err => console.error('Error:', err));