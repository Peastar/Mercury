module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: 3,
                targets: {
                    node: 'current',
                    esmodules: true,
                },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        'react-hot-loader/babel',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-parameters',
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-template-literals',
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 3,
            },
        ],
    ],
};
