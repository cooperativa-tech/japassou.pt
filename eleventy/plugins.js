const lazyImagesPlugin = require("eleventy-plugin-lazyimages");
const cacheBuster = require("@mightyplow/eleventy-plugin-cache-buster");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function loadPlugins(eleventyConfig) {
  eleventyConfig.addPlugin(lazyImagesPlugin, {
    transformImgPath: (imgPath) => {
      return `./src/${imgPath}`;
    },
    cacheFile: "./cache/lazyimages.json",
  });

  eleventyConfig.addPlugin(pluginRss);

  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addPlugin(
      cacheBuster({
        outputDirectory: "dist",
      }),
    );
  }
};
