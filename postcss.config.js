module.exports = ({ env }) => ({
  plugins: {
    "postcss-import": {},
    precss: {},
    "postcss-responsive-type": {},
    autoprefixer: {},
    "@fullhuman/postcss-purgecss":
      env === "production"
        ? {
            content: ["src/**/*.html", "src/**/*.njk"],
          }
        : false,
    cssnano: env === "production" ? { preset: "advanced" } : false,
  },
});
