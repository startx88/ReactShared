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
      "redux-devtools-extension": "composeWithDevTools"
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
    "redux-devtools-extension"
  ],
  plugins: [
    resolve({
      // the fields to scan in a package.json to determine the entry point
      // if this list contains "browser", overrides specified in "pkg.browser"
      // will be used
      //mainFields: ["module", "main"], // Default: ['module', 'main']

      // DEPRECATED: use "mainFields" instead
      // use "module" field for ES6 module if possible
      module: true, // Default: true

      // DEPRECATED: use "mainFields" instead
      // use "jsnext:main" if possible
      // legacy field pointing to ES6 module in third-party libraries,
      // deprecated in favor of "pkg.module":
      // - see: https://github.com/rollup/rollup/wiki/pkg.module
      jsnext: false, // Default: false

      // DEPRECATED: use "mainFields" instead
      // use "main" field or index.js, even if it's not an ES6 module
      // (needs to be converted from CommonJS to ES6)
      // – see https://github.com/rollup/rollup-plugin-commonjs
      main: true, // Default: true

      // some package.json files have a "browser" field which specifies
      // alternative files to load for people bundling for the browser. If
      // that's you, either use this option or add "browser" to the
      // "mainfields" option, otherwise pkg.browser will be ignored
      browser: false, // Default: false

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
