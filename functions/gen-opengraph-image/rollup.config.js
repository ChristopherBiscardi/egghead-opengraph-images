import babel from "rollup-plugin-babel";

const config = {
  input: "src/image.js",
  output: [
    {
      file: `image.js`,
      format: "cjs"
    }
  ],
  plugins: [babel()]
};

export default config;
