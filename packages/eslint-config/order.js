module.exports = {
    rules: {
        'import/order': [
            2,
            {
                alphabetize: {
                    order: 'asc',
                },
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
                pathGroups: [
                    {
                        group: 'external',
                        pattern: 'react',
                        position: 'before',
                    },
                    {
                        pattern: '*.{svg,png,jpg,jpeg,webp,json}',
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true,
                        },
                        group: 'type',
                        position: 'after',
                    },
                    {
                        pattern: '*.{css,sass,scss,less,styl}',
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true,
                        },
                        group: 'type',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: [
                    '*.{svg,png,jpg,jpeg,webp,json}',
                    '*.{css,sass,scss,less,styl}',
                    'react',
                ],
                warnOnUnassignedImports: true,
            },
        ],
    },
};
