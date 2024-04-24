import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { feedPlugin } from '@vuepress/plugin-feed';
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { gitPlugin } from '@vuepress/plugin-git'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { commentPlugin } from "@vuepress/plugin-comment";

const compareDate = (dateA, dateB) => {
    if (!dateA || !(dateA instanceof Date)) return 1;
    if (!dateB || !(dateB instanceof Date)) return -1;

    return dateB.getTime() - dateA.getTime();
};


export default defineUserConfig({
    bundler: viteBundler(),
    extendsBundlerOptions: (config, app) => {
        // addViteSsrNoExternal(config, app, 'vuepress-shared');
    },
    lang: 'en-US',
    title: 'Mojo Dojo',
    description: 'Learning Resources for Mojo 🔥',
    pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules', '!wip'],
    markdown: {
        code: {
            lineNumbers: false
        }
    },
    theme: defaultTheme({
        colorMode: 'dark',
        logo: '/hero.png',
        repo: 'modularml/mojodojo.dev',
        repoLabel: 'GitHub',
        docsRepo: 'modularml/mojodojo.dev',
        docsBranch: 'main',
        lastUpdated: false,
        locales: {
            '/': {
                selectLanguageName: 'English',
                editLinkText: 'Edit this page on GitHub',
                navbar: [
                    { text: 'Guides', link: '/guides/' },
                    { text: 'Mojo Team Answers', link: '/mojo-team-answers' },
                    { text: 'This Week in Mojo', link: '/this-week-in-mojo/' },
                    { text: 'Blog', link: '/blog/' },
                    { text: 'Is Mojo for Me?', link: '/is-mojo-for-me' },
                ],
                sidebar: [
                    {
                        text: 'Guides',
                        link: '/guides/',
                        collapsible: true,
                        children: [
                            {
                                text: "Intro to Mojo",
                                collapsible: true,
                                children: [
                                    "/guides/intro-to-mojo/basic-types",
                                ],
                            },
                        ],
                    },
                    "/mojo-team-answers.md",
                    {
                        text: 'This Week in Mojo',
                        link: '/this-week-in-mojo/',
                        collapsible: true,
                        children: [
                            '/this-week-in-mojo/2023-08-18.md',
                            '/this-week-in-mojo/2023-08-11.md',
                            '/this-week-in-mojo/2023-08-04.md',
                            '/this-week-in-mojo/2023-07-28.md',
                            '/this-week-in-mojo/2023-07-21.md',
                            '/this-week-in-mojo/2023-07-14.md',
                            '/this-week-in-mojo/2023-07-07.md',
                            '/this-week-in-mojo/2023-06-30.md',
                            '/this-week-in-mojo/2023-06-23.md',
                            '/this-week-in-mojo/2023-06-16.md',
                            '/this-week-in-mojo/2023-06-09.md',
                            '/this-week-in-mojo/2023-06-02.md',
                            '/this-week-in-mojo/2023-05-26.md',
                            '/this-week-in-mojo/2023-05-19.md',
                            '/this-week-in-mojo/2023-05-12.md',
                        ]
                    },
                    {
                        text: 'Modverse Weekly',
                        link: '/modverse-weekly/',
                        collapsible: true,
                        children: [
                            '/modverse-weekly/issue-31.md',
                        ]
                    },
                    {
                        text: 'Blog',
                        link: '/blog/',
                        collapsible: true,
                        children: [
                            '/blog/2023-07-17-rust-or-mojo-ai.md',
                            '/blog/2023-05-22-mojo-first-impressions.md',
                            '/blog/2023-05-08-why-use-mojo.md',
                        ]
                    },
                    "/is-mojo-for-me.md",
                ],
            }
        }
    }),
    plugins: [
        gitPlugin({
            contributors: false
        }),
        commentPlugin({
            provider: "Giscus",
            repo: "modularml/mojodojo.dev",
            repoId: "R_kgDOJfLZPA",
            category: "Comments",
            categoryId: "DIC_kwDOJfLZPM4CXrxB",
            darkTheme: 'dark_dimmed',
            lightTheme: 'dark_dimmed',
        }),
        docsearchPlugin({
            appId: 'WHF26ZE58I',
            indexName: 'mojodojo',
            apiKey: 'd0eba3511025ee492b32890fdd60cdf3',
        }),
        googleAnalyticsPlugin({
            id: 'G-8B385M142M',
        }),
        shikiPlugin({
            langs: ["mojo", "python", "shell", "ansi"],
            theme: 'tokyo-night',
        }),
        feedPlugin({
            rss: true,
            json: true,
            atom: true,
            count: 30,

            hostname: 'https://www.mojodojo.dev',
            filter: ({ frontmatter }) => {
                return (
                    frontmatter.feed === true
                );
            },
            sorter: (a, b) => {
                return compareDate(
                    a.data.git?.createdTime
                        ? new Date(a.data.git?.createdTime)
                        : a.frontmatter.date,
                    b.data.git?.createdTime
                        ? new Date(b.data.git?.createdTime)
                        : b.frontmatter.date
                );
            },
        }),

    ],
    onPrepared: async (app) => {
        await app.writeTemp(
            'pages.js',
            `export default ${JSON.stringify(app.pages.map(({ data }) => data))}`
        );
    },
});
