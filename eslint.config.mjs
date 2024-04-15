// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

// export default [
//   { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
//   pluginReactConfig,
// ];

// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
