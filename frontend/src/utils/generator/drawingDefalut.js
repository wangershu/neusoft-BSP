export default [
  {
    layout: 'colFormItem',
    tagIcon: 'input',
    label: 'phone number',
    vModel: 'mobile',
    formId: 6,
    tag: 'el-input',
    placeholder: 'Please enter phone number',
    defaultValue: '',
    span: 24,
    style: { width: '100%' },
    clearable: true,
    prepend: '',
    append: '',
    'prefix-icon': 'el-icon-mobile',
    'suffix-icon': '',
    maxlength: 11,
    'show-word-limit': true,
    readonly: false,
    disabled: false,
    required: true,
    changeTag: true,
    regList: [{
      pattern: '/^1(3|4|5|7|8|9)\\d{9}$/',
      message: 'Malformed phone number'
    }]
  }
]
