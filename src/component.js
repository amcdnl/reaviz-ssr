const { BarChart, BarSeries } = require('reaviz');
const { createElement } = require('react');

const categoryData = [
  {
    key: 'Phishing Attack',
    data: 10
  },
  {
    key: 'IDS',
    data: 14
  },
  {
    key: 'Malware',
    data: 5
  },
  {
    key: 'DLP',
    data: 18
  }
];

module.exports = createElement(
  BarChart,
  {
    width: 350,
    height: 250,
    data: categoryData,
    series: createElement(
      BarSeries,
      {
        animated: false
      }
    )
  });
