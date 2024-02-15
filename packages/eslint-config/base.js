module.exports = {
    env: {
        es6: true,
        'shared-node-browser': true,
    },
    extends: ['eslint:recommended'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                strict: 0,
                'no-undef': 0,
                'no-dupe-class-members': 0,

                'valid-jsdoc': [
                    1,
                    {
                        requireReturnType: false,
                        requireParamType: false,
                        requireParamDescription: false,
                        requireReturnDescription: false,
                    },
                ],

                'no-array-constructor': 0,
                'no-loop-func': 0,
                'no-redeclare': 0,
                'no-shadow': 0,
                'no-unused-expressions': 0,
                'no-unused-vars': 0,
                'no-use-before-define': 0,
                'no-useless-constructor': 0,
                '@typescript-eslint/no-array-constructor': 1,
                '@typescript-eslint/no-loop-func': 2,
                '@typescript-eslint/no-redeclare': 2,
                '@typescript-eslint/no-shadow': 1,
                '@typescript-eslint/no-unused-expressions': 2,
                '@typescript-eslint/no-unused-vars': [
                    2,
                    {
                        argsIgnorePattern: '^_',
                        varsIgnorePattern: '^_',
                    },
                ],
                '@typescript-eslint/no-use-before-define': [1, {functions: false}],
                '@typescript-eslint/no-useless-constructor': 2,
                '@typescript-eslint/naming-convention': [
                    2,
                    {
                        selector: 'typeLike',
                        format: ['PascalCase'],
                        leadingUnderscore: 'forbid',
                    },
                ],
                '@typescript-eslint/member-delimiter-style': 2,
                '@typescript-eslint/member-ordering': [
                    2,
                    {
                        default: [
                            'public-static-field',
                            'protected-static-field',
                            'private-static-field',

                            'public-static-method',
                            'protected-static-method',
                            'private-static-method',

                            'public-instance-field',
                            'protected-instance-field',
                            'private-instance-field',

                            'constructor',

                            'public-instance-method',
                            'protected-instance-method',
                            'private-instance-method',
                        ],
                    },
                ],
                '@typescript-eslint/explicit-member-accessibility': [2, {accessibility: 'no-public'}],
                '@typescript-eslint/consistent-type-assertions': 2,
                '@typescript-eslint/no-explicit-any': 1,
                '@typescript-eslint/no-inferrable-types': 2,
                '@typescript-eslint/no-namespace': 2,
                '@typescript-eslint/no-non-null-assertion': 1,
                '@typescript-eslint/parameter-properties': 2,
                '@typescript-eslint/triple-slash-reference': 2,
                '@typescript-eslint/prefer-namespace-keyword': 2,
                '@typescript-eslint/type-annotation-spacing': [
                    2,
                    {
                        before: true,
                        after: true,
                        overrides: {
                            colon: {
                                before: false,
                            },
                        },
                    },
                ],
            },
        },
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2019,
        requireConfigFile: false,
    },
    plugins: ['import'],
    rules: {
        'no-empty': 0, // eslint rec
        'valid-jsdoc': [1, {requireParamDescription: false, requireReturnDescription: false}],

        'array-callback-return': 2,
        'block-scoped-var': 1,
        complexity: 1,
        'consistent-return': 1,
        curly: 2,
        'dot-location': [2, 'property'],
        eqeqeq: [1, 'always'],
        'guard-for-in': 2,
        'no-caller': 2,
        'no-console': 1,
        'no-div-regex': 1,
        'no-eval': 1,
        'no-extend-native': 2,
        'no-extra-bind': 1,
        'no-extra-label': 2,
        'no-floating-decimal': 2,
        'no-global-assign': 1, // eslint rec
        'no-implicit-coercion': 1,
        'no-implicit-globals': 1,
        'no-implied-eval': 1,
        'no-iterator': 2,
        'no-labels': 2,
        'no-loop-func': 2,
        'no-new': 2,
        'no-eq-null': 2,
        'no-throw-literal': 1,
        'no-new-func': 1,
        'no-new-wrappers': 2,
        'no-octal-escape': 2,
        'no-param-reassign': [1, {props: true}],
        'no-proto': 2,
        'no-return-assign': [2, 'always'],
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-void': 2,
        'no-with': 2,
        radix: 1,
        'wrap-iife': [2, 'inside'],

        // Variables
        'no-label-var': 2,
        'no-shadow': 1,
        'no-shadow-restricted-names': 2,
        'no-undef-init': 2,
        'no-use-before-define': [1, {functions: false}],

        // Node.js and CommonJS
        'callback-return': 1,
        'handle-callback-err': 1,
        'no-new-require': 2,
        'no-path-concat': 1,

        // Stylistic Issues
        camelcase: [2, {properties: 'never'}],
        'comma-style': [2, 'last'],
        'max-depth': [1, {maximum: 5}],
        'new-cap': 2,
        'no-lonely-if': 1,
        'no-negated-condition': 1,
        'no-nested-ternary': 1,
        'no-new-object': 1,
        'new-parens': 2,
        'no-array-constructor': 1,
        'no-bitwise': 2,
        'no-restricted-syntax': [2, 'WithStatement'],
        'no-unneeded-ternary': 2,
        'sort-imports': [
            2,
            {
                ignoreDeclarationSort: true,
            },
        ],

        // ECMAStrict 6
        'no-useless-constructor': 2,
        'no-var': 2,
        'prefer-arrow-callback': [1, {allowNamedFunctions: true}],
        'prefer-const': 2,
        'require-atomic-updates': 0, // eslint rec
        'require-yield': 1, // eslint rec
        'prefer-rest-params': 2,
        'prefer-spread': 2,

        'import/no-duplicates': [2, {considerQueryString: true}],
        'import/no-extraneous-dependencies': [2, {includeTypes: true}],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: true,
            node: true,
        },
    },
};
