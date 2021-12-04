const {
  addDecoratorsLegacy,
  disableEsLint, // eslint를 끄는 것은 아님
  override,
} = require('customize-cra');

module.exports = {
  webpack: override(disableEsLint(), addDecoratorsLegacy()),
};
