module.exports = {
    bracketSpacing: false,
    htmlWhitespaceSensitivity: 'strict',
    printWidth: 120,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            options: {
                parser: 'typescript',
            },
        },
        {
            files: ['*.md', '*.json', '*.yaml', '*.yml', '*.xml', '*.xaml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
