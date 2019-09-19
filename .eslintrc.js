module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "plugins": [
    "html"
  ],
  "extends": [
    "standard"
  ],
  "parserOptions": {
    // "sourceType": "module",
    "ecmaFeatures": {
      "arrowFunctions": true, // lambda表达式
      "destructuring": true, // 解构赋值
      "classes": true, // class
      "blockBindings": true, // 块级作用域，允许使用let const
      "defaultParams": true, // 函数参数的默认值
      "objectLiteralComputedProperties": true, // 允许字面量定义对象时，用表达式做属性名
      "objectLiteralShorthandMethods": true, // 允许对象字面量方法名简写
      "objectLiteralShorthandProperties": true,  // 允许对象字面量属性名简写
      "modules": true, // 允许使用模块，模块内默认严格模式
      "forOf": true, // 允许使用for...of循环
      "spread": true, // 扩展运算符
      "restParams": true, // rest参数
      "generators": true, // es6 generators 方法
      "templateStrings": true, // 模板字符串
      "superInFunctions": true,
      "experimentalObjectRestSpread": true // 对象的扩展运算符
    },
    "parser": "babel-eslint"
  },
  "parser": "vue-eslint-parser",
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "single"],
    "semi": ["off", "always"],
    "no-new": "off",
    "no-console": "off",
    "accessor-pairs": 2, // 定义对象的set存取器属性时，强制定义get
    "array-bracket-spacing": [2, "never"], // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    "block-scoped-var": "warn", // 在块级作用域外访问块内定义的变量是否报错提示
    "camelcase": 2, // 双峰驼命名格式
    "comma-dangle": [2, "never"], // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
    "comma-spacing": [2, {"before": false, "after": true}], // 控制逗号前后的空格
    "comma-style": [2, "last"], // 控制逗号在行尾出现还是在行首出现
    "no-async-promise-executor": "off",
    "space-in-parens": "off",
    "no-misleading-character-class": "off",
    "no-useless-catch": "off",
    "semi-spacing": "error", // 分号前后不能有空格
    "spaced-comment": "error", // 注释前需要一个空格
    "yoda": ["error", "never"], // 条件语句中，变量在赋值语句的前面
    "no-path-concat": "error", // 不允许路径以_链接
    "no-trailing-spaces": "error", // 不允许在语句后存在多余的空格
    "no-spaced-func": "error", // 调用函数时，函数名和括号之间不能空格
    "no-redeclare": "error", // 不允许重复声明
    "no-multi-spaces": "error", // 不允许键和值之间存在多个空格
    "new-parens": "error", // 	没有参数时，构造函数也需要添加括号
    "newline-after-var": "off" // var定义后不空行
  }
}