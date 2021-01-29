import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/index.ie11.js',
    output: [
        {
            name: 'AlpineClipboard',
            file: 'dist/alpine-clipboard.ie11.js',
            format: 'umd',
            sourcemap: true,
        }
    ],
    plugins: [
        resolve(),
        filesize(),
        babel({
            exclude: 'node_modules/**',
            babelrc: false,
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current',
                            edge: '18',
                            ie: '11',
                            ios: '11.3',
                            safari: '13'
                        }
                    }
                ]
            ]
        })
    ]
}