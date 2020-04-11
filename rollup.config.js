import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
const dist = "dist";
const bundle = "bundle";
const production = !process.env.ROLLUP_WATCH;

/** Output
 * 1. common js
 * 2. es module
 * 3. cdn
 */
const outputs = [
  {
    file: `${dist}/${bundle}.cjs.js`,
    format: "cjs",
    sourcemap: true
  },
  {
    file: `${dist}/${bundle}.es.js`,
    format: "es"
  },
  {
    name: "ReactShared",
    file: `${dist}/${bundle}.umd.js`,
    globals: {
      react: "React",
      redux: "createStore, combineReducers, applyMiddleware",
      axios: "axios",
      reselect: "createSelector,createSelectorCreator, defaultMemoize ,createStructuredSelector",
      "redux-thunk": "thunk",
      "prop-types": "PropTypes",
      "redux-devtools-extension": "composeWithDevTools",
      "@fortawesome/fontawesome-svg-core": "library, config",
      "@fortawesome/free-solid-svg-icons": "freeSolidSvgIcons",
      "@fortawesome/free-brands-svg-icons": "freeBrandsSvgIcons",
      "@fortawesome/react-fontawesome": "reactFontawesome"
    },
    format: "umd"
  }
];

const common = {
  input: "src/index.js",
  external: [
    "react",
    "axios",
    "redux",
    "redux-thunk",
    "redux-devtools-extension",
    "@fortawesome/fontawesome-svg-core",
    "@fortawesome/free-solid-svg-icons",
    "@fortawesome/free-brands-svg-icons",
    "@fortawesome/react-fontawesome",
    "prop-types",
    "reselect"
  ],
  plugins: [
    resolve({
      mainFields: ["module", "main"], // Default: ['module', 'main']
      extensions: [".mjs", ".js", ".jsx", ".json"], // Default: [ '.mjs', '.js', '.json', '.node' ]
      preferBuiltins: false, // Default: true
      modulesOnly: true, // Default: false
      customResolveOptions: {
        moduleDirectory: "js_modules"
      }
    }),
    commonjs({
      include: /node_modules/,
      extensions: [".js", ".jsx"]
    }),
    babel({
      exclude: "node_modules/**"
    })
  ]
};

if (production) {
  common.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  );
}

export default outputs.map(output => ({
  ...common,
  output
}));
