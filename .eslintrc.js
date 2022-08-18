module.exports = {
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.jsx'],
      env: {
        browser: true,
        es6: true,
      },
      extends: ['eslint:recommended', 'plugin:react/recommended'],
      parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: {
          jsx: true,
        },
        // https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
        // 可解决React.lazy动态导入问题
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['react', 'react-hooks'],
      rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': 1,
        'react/prop-types': 1,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      globals: {
        process: true,
        __dirname: true,
        module: true,
        require: true,
      },
    },
    {
      files: [
        'webpack.config.js',
        '.eslintrc.js',
        'config/*.js',
        'mock/**/*.js',
      ],
      env: {
        commonjs: true,
        node: true,
        es6: true,
      },
      parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      extends: 'eslint:recommended',
      rules: {
        'no-unused-vars': 'warn',
        'no-useless-escape': 'warn',
      },
    },
  ],
};
