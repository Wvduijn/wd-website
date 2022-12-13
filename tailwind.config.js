module.exports = {
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],

    content: [
        './src/**/*.vue',
        // other content types mentioned above
    ],
    purge: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.md',
        './src/**/*.html',
    ],
    safelist: [
        'wd-void-animation',
        'other-class',
        { pattern: [/^fa-/, /^svg-inline--fa/] },
        { pattern: [/^token/, /^pre/, /^code/] },
    ],
}
