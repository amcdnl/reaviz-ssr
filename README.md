# reaviz ssr bug

When you run `npm test` it will:

- Use `ReactDOMServer.renderToStaticMarkup()` to render the markup
- Take the SVG output and turn it into a PNG using [svg-to-image](https://www.npmjs.com/package/svg-to-img) which internally
uses [puppeteer](https://github.com/GoogleChrome/puppeteer).
- Save the image locally to `dist/chart.png`

## Example Output

```html
<svg width="350" height="250" class="BarChart-module_barChart__1TypA">
  <g transform="translate(10, 10)">
    <g transform="translate(0, 230)">
      <line x1="0" x2="330" y1="0" y2="0.00001" stroke-width="1" stroke="#8F979F"></line>
      <g transform="translate(45, 0)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="0" y1="0" y2="5"></line>
        <g transform="translate(-5, 5)" font-size="11" font-family="sans-serif">
          <title>Phishing Attack</title><text transform="rotate(-60)" text-anchor="end" alignment-baseline="middle"
            fill="#8F979F">Phishing Attack</text>
        </g>
      </g>
      <g transform="translate(125, 0)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="0" y1="0" y2="5"></line>
        <g transform="translate(-5, 5)" font-size="11" font-family="sans-serif">
          <title>IDS</title><text transform="rotate(-60)" text-anchor="end" alignment-baseline="middle"
            fill="#8F979F">IDS</text>
        </g>
      </g>
      <g transform="translate(205, 0)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="0" y1="0" y2="5"></line>
        <g transform="translate(-5, 5)" font-size="11" font-family="sans-serif">
          <title>Malware</title><text transform="rotate(-60)" text-anchor="end" alignment-baseline="middle"
            fill="#8F979F">Malware</text>
        </g>
      </g>
      <g transform="translate(285, 0)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="0" y1="0" y2="5"></line>
        <g transform="translate(-5, 5)" font-size="11" font-family="sans-serif">
          <title>DLP</title><text transform="rotate(-60)" text-anchor="end" alignment-baseline="middle"
            fill="#8F979F">DLP</text>
        </g>
      </g>
    </g>
    <g transform="translate(0, 0)">
      <line x1="0" x2="0.00001" y1="230" y2="0" stroke-width="1" stroke="#8F979F"></line>
      <g transform="translate(0, 230)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="-5" y1="0" y2="0"></line>
        <g transform="translate(-5, 0)" font-size="11" font-family="sans-serif">
          <title>0</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F">0</text>
        </g>
      </g>
      <g transform="translate(0, 204.44444444444446)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="-5" y1="0" y2="0"></line>
        <g transform="translate(-5, 0)" font-size="11" font-family="sans-serif">
          <title>2</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F">2</text>
        </g>
      </g>
      <g transform="translate(0, 178.88888888888889)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="-5" y1="0" y2="0"></line>
        <g transform="translate(-5, 0)" font-size="11" font-family="sans-serif">
          <title>4</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F">4</text>
        </g>
      </g>
      <g transform="translate(0, 153.33333333333334)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="-5" y1="0" y2="0"></line>
        <g transform="translate(-5, 0)" font-size="11" font-family="sans-serif">
          <title>6</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F">6</text>
        </g>
      </g>
      <g transform="translate(0, 127.77777777777779)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="-5" y1="0" y2="0"></line>
        <g transform="translate(-5, 0)" font-size="11" font-family="sans-serif">
          <title>8</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F">8</text>
        </g>
      </g>
      <g transform="translate(0, 102.22222222222221)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="-5" y1="0" y2="0"></line>
        <g transform="translate(-5, 0)" font-size="11" font-family="sans-serif">
          <title>10</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F">10</text>
        </g>
      </g>
      <g transform="translate(0, 76.66666666666669)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="-5" y1="0" y2="0"></line>
        <g transform="translate(-5, 0)" font-size="11" font-family="sans-serif">
          <title>12</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F">12</text>
        </g>
      </g>
      <g transform="translate(0, 51.111111111111114)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="-5" y1="0" y2="0"></line>
        <g transform="translate(-5, 0)" font-size="11" font-family="sans-serif">
          <title>14</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F">14</text>
        </g>
      </g>
      <g transform="translate(0, 25.55555555555557)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="-5" y1="0" y2="0"></line>
        <g transform="translate(-5, 0)" font-size="11" font-family="sans-serif">
          <title>16</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F">16</text>
        </g>
      </g>
      <g transform="translate(0, 0)">
        <line stroke-width="1" stroke="#8F979F" x1="0" x2="-5" y1="0" y2="0"></line>
        <g transform="translate(-5, 0)" font-size="11" font-family="sans-serif">
          <title>18</title><text transform="" text-anchor="end" alignment-baseline="middle" fill="#8F979F">18</text>
        </g>
      </g>
    </g>
  </g>
</svg>
```