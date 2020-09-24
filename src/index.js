const ReactDOMServer = require('react-dom/server');
const Component = require('./component');
const svgToImg = require('svg-to-img');
const fs = require('fs');

(async () => {
  const str = ReactDOMServer.renderToStaticMarkup(Component);
  console.log('SVG:', str);

  const image = await svgToImg
    .from(`<svg xmlns="http://www.w3.org/2000/svg">${str}</svg>`)
    .toPng({
      // encoding: "base64"
    });

  console.log(`SVG`, str);

  console.log('Image:', image);

  fs.writeFileSync('dist/chart.png', image);
  // fs.writeFileSync('asynchronous.png', image, 'base64');
})();
