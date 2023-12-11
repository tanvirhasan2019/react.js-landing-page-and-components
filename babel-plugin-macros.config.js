module.exports = {
  twin: {
    styled: "styled-components",
    config: "./src/tailwind.config.js",
    format: "auto"
  },
  rules: [
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/', // Adjust the output path as needed
          },
        },
      ],
    },
  ],
};
