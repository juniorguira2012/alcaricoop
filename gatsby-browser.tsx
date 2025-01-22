require('./src/assets/styles/_global.scss')
const { useAnimation } = require('./src/hooks/useAnimation')
const React = require('react')

exports.wrapPageElement = ({ element, props }) => {
    useAnimation({})

    return element
}
