const fs = require("fs");
const filters = require("./eleventy/filters.js");
const passthroughs = require("./eleventy/passthroughs");
const plugins = require("./eleventy/plugins");
const transforms = require("./eleventy/transforms.js");

// Create the cache dir
if (!fs.existsSync("cache")) fs.mkdirSync("cache");

module.exports = (eleventyConfig) => {
  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Passthroughs
  passthroughs.forEach((passthrough) =>
    eleventyConfig.addPassthroughCopy(passthrough),
  );

  // Plugins
  plugins(eleventyConfig);

  // Transform
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName]);
  });

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
  };
};
