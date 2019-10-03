// module.exports = {
//   root: true,
//   extends: '@react-native-community',
// };
module.exports = {
  root: true,
  extends: ["airbnb", "prettier"],
  plugins: ["react", "jsx-a11y", "import"],
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    "no-use-before-define": "off",
    "react/prop-types": "off",
    "no-case-declarations": "off",
    "global-require": "off",
    "no-underscore-dangle": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/require-default-props": "off"
  }
};

