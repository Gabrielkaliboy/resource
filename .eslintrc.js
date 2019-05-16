module.exports = {
	'env': {//你的脚本将要运行在什么环境中   Environment可以预设好的其他环境的全局变量，如brower、node环境变量、es6环境变量、mocha环境变量等
		'browser': true,//浏览器
		'es6': true,//支持es6
		'node': true//node
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential'
	],
	'globals': { //额外的全局变量
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'vue'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};