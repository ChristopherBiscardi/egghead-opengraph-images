import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";

const config = {
  input: "src/image.js",
  output: [
    {
      file: `image.js`,
      format: "iife",
    },
  ],
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
  ],
};

export default config;
