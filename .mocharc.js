'use strict';

module.exports = {
    reporter: 'spec',
    slow: 5000,
    require: [
        '@babel/register',
        'test/unit/helpers.js',
        'test/integration/helpers.js'
    ]
}