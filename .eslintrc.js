module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/essential", "airbnb-base", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: 15,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "vue/html-indent": ["warn", 4],
  },
};
