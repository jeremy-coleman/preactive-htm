import ts from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'

export default {
    input: './node_modules/preact/dist/preact.mjs',
    output: {
        file: 'dist/preact.js',
        format: 'es'
    },
    plugins: [
        ts({typescript: require('typescript')}),
        //babel({extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"]}),
        terser()
    ]
}