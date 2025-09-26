const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: '3.37',
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: devMode ? ['react-refresh/babel'] : [],
};
