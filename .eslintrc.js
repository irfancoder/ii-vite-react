module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'settings': {
        'react': {
            'createClass': 'createReactClass',
            'pragma': 'React',
            'fragment': 'Fragment',
            'version': 'detect',
            'flowVersion': '0.53' 
        }
    },
    'ignorePatterns': ['test/**/*.js'],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'comma-dangle': [
            'error',
            'never'
        ],
        'object-curly-spacing': ['error', 'always'],
        'react/prop-types': 'off'
    }
}
