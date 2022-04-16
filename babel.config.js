/**
 * Only for Jest configuration. Not used in actual development / production
 */

module.exports = {
    presets: [
        ['@babel/preset-react', { 'runtime': 'automatic' }], 
        '@babel/preset-env'
    ]
}