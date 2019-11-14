module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
        "prefer-destructuring": ["error", {"object": false, "array": true}]
    }
};