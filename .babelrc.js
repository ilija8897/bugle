module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        targets: {
          browsers: [
            "last 10 chrome versions",
            "last 5 Safari versions",
            "last 5 Firefox versions",
            "last 3 Edge versions",
            "IE >= 10",
          ],
        },
      },
    ],
    "@babel/preset-react",
    "@babel/typescript",
  ],
};
