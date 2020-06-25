// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
    siteName: 'Willem van Duijn - Front-end Developer',
    siteDescription:
        'Willem van Duijn, Freelance Front-end Developer gespecialiseerd in Angular, Vue, Nuxt & recent ook webcomponents met StencilJS',

    templates: {
        ContentfulBlogPost: [
            {
                path: '/blog/:slug',
                component: './src/templates/ContentfulBlogPost.vue',
            },
        ],
        ContentfulTag: [
            {
                path: '/blog/tag/:slug',
                component: './src/templates/Tag.vue',
            },
        ],
    },

    plugins: [
        // Integrate Contentful
        {
            use: '@gridsome/source-contentful',
            options: {
                space: process.env.CONTENTFUL_SPACE,
                accessToken: process.env.CONTENTFUL_TOKEN,
                host: 'cdn.contentful.com',
                environment: process.env.CONTENTFUL_ENVIRONMENT,
                typename: 'Contentful',
            },
        },
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: './tailwind.config.js',
                purgeConfig: {},
                presetEnvConfig: {},
                shouldPurge: true,
                shouldImport: true,
                shouldTimeTravel: true,
                shouldPurgeUnusedKeyframes: true,
            },
        },
        {
            use: 'gridsome-plugin-sass-resources-loader',
            options: {
                // provide path to the file with resources
                resources: [
                    './src/assets/style/_variables.scss',
                    './src/assets/style/_media-queries.scss',
                ],
            },
        },
        // ENABLE ANALYTICS WHEN GOLIVE
        // {
        //     use: '@gridsome/plugin-google-analytics',
        //     options: {
        //         id: process.env.ANALYTICS_ID,
        //     },
        // },
    ],

    transformers: {
        //Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: ['@gridsome/remark-prismjs'],
        },
    },

    // Extra webpack config
    chainWebpack: (config) => {
        config.resolve.alias.set('@style', '@/assets/style/')
        config.resolve.alias.set('@images', '@/assets/images/')
        config.resolve.alias.set('@devimages', '@/assets/images/dev-logos/')
    },
}
