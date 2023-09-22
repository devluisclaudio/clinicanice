module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: 'vuetify',

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    // https://github.com/babel/babel-eslint/issues/681#issuecomment-420663038
    'template-curly-spacing': 'off',
    indent: 'off',
    //
    'no-unused-vars': 'off',
    'vue/script-setup-uses-vars': 'off',
    
  },
}
