const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const format = require('date-fns/format');
const deLocale = require('date-fns/locale/ru') // Russian

module.exports = function(config) {
  config.addPlugin(pluginSyntaxHighlight);
  // Date formatting (human readable)
  config.addFilter("readableDate", dateObj => {
   return format(new Date(dateObj), 'DD MMMM YYYY', { locale: deLocale } );

  });


  // Move css folder to dist
  config.addPassthroughCopy('src/css');
  config.addPassthroughCopy('src/js');
  config.addPassthroughCopy('src/images');

  return {

    dir: {
      includes: "templates",
      input: "src",
      output: "dist"
    },
    passthroughFileCopy: true,
    pathPrefix: "/",
  };
};