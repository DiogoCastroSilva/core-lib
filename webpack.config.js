const path = require('path');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        core: path.join(__dirname, 'src', 'index.tsx'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'core-lib',
        libraryTarget: 'umd'
    },
    externals: {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom'
        }
    },
    module: {
        rules: [
            {
                test: /\.ts|tsx?$/,
                use: 'ts-loader',
                exclude: [
                    '/node_modules/',
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}