module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'import', 'react-hooks'],
  settings: {
    'import/resolver': {
      webpack: { config: { resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } } },
      typescript: {},
    },
    react: { version: 'detect' },
  },
  rules: {
    // a collection of standard rules inspired by the Airbnb config
    'default-case': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // allow console for exercise
    'no-console': 'off',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'object-shorthand': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'symbol-description': 'error',
    yoda: [
      'error',
      'never',
      {
        exceptRange: true,
        onlyEquality: false,
      },
    ],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    'implicit-arrow-linebreak': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'operator-linebreak': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // empty functions can be useful in tests, or for no-ops
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // React linting

    // handled by `react-display-name` Babel plugin
    'react/display-name': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-newline': ['error', { prevent: true }],
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-wrap-multilines': ['error', { prop: 'ignore' }],
    'react/self-closing-comp': 'error',

    'import/extensions': ['error', 'never'],

    // these are a bit overly picky in a timed environment
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
  },
  overrides: [
    {
      files: ['*rc.js', '*.config.js'],
      env: { node: true },
      rules: { '@typescript-eslint/no-var-requires': 'off' },
    },
  ],
};
