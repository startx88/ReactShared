import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

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
    format: "cjs"
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
      "redux-thunk": "thunk",
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
    "@fortawesome/react-fontawesome"
  ],
  plugins: [
    resolve({
      // the fields to scan in a package.json to determine the entry point
      // if this list contains "browser", overrides specified in "pkg.browser"
      // will be used
      mainFields: ["module", "main"], // Default: ['module', 'main']

      // not all files you want to resolve are .js files
      extensions: [".mjs", ".js", ".jsx", ".json"], // Default: [ '.mjs', '.js', '.json', '.node' ]

      // whether to prefer built-in modules (e.g. `fs`, `path`) or
      // local ones with the same names
      preferBuiltins: false, // Default: true

      // If true, inspect resolved files to check that they are
      // ES2015 modules
      modulesOnly: true, // Default: false

      // Force resolving for these modules to root's node_modules that helps
      // to prevent bundling the same package multiple times if package is
      // imported from dependencies.
      dedupe: ["react", "react-dom", "redux", "redux-thunk", "axios"], // Default: []

      // Any additional options that should be passed through
      // to node-resolve
      customResolveOptions: {
        moduleDirectory: "js_modules"
      }
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
