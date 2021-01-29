
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/alpine-clipboard.js',
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        filesize(),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current'
                        }
                    }
                ]
            ]
        })
    ]
}