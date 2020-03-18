'use strict';

module.exports = {
    reporter: 'spec',
    slow: 5000,
    require: [
        '@babel/register',
        'test/integration/helpers.js'
    ]
}