import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'


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
        format: 'cjs'
    },
    {
        file: `${dist}/${bundle}.es.js`,
        format: 'es'
    },
    {
        name: 'ReactShared',
        file: `${dist}/${bundle}.umd.js`,
        globals: {
            react: "React"
        },
        format: 'umd',
    }
];

const common = {
    input: 'src/index.js',
    external: ['react'],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**',
        })
    ]
}


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
    )
}

export default outputs.map(output => ({
    ...common,
    output
}))
