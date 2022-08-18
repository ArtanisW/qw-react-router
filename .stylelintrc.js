module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  overrides: [
    {
      files: '**/*.less',
      extends: ['stylelint-config-recommended-less'],
    },
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'no-invalid-double-slash-comments': null,
    'font-family-no-duplicate-names': null,
  },
  customSyntax: 'postcss-less',
};
