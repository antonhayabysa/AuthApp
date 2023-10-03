module.exports = {
  preset: "react-native",
  globals: {
    "ts-jest": {
      babelConfig: true
    }
  },
  transform: {
    "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "\\.(ts|tsx)$": "ts-jest"
  }
};
