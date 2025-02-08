/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    // scss variables
    "custom-property-empty-line-before": null,
    "scss/double-slash-comment-empty-line-before": null,

    "declaration-empty-line-before": null,
    "color-function-notation": null,
  },
};
