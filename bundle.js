/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./es6.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./es6.js":
/*!****************!*\
  !*** ./es6.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar funcoes = _interopRequireWildcard(__webpack_require__(/*! ./funcoes */ \"./funcoes.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* Classes\r\nclass List {\r\n    constructor() {\r\n        this.data = []\r\n    }\r\n\r\n    addData(data) {\r\n        this.data.push(data)\r\n        console.log(this.data)\r\n    }\r\n}\r\n\r\nclass todoList extends List{\r\n    constructor() {\r\n        super()\r\n        this.usuario = 'Vinicius'\r\n    }\r\n\r\n    mostraUsuario() {\r\n        console.log(this.usuario)\r\n    }\r\n}\r\n\r\nclass Matematica{\r\n    static soma(a,b){\r\n        return a+b\r\n    }\r\n}\r\n\r\nconst minhaLista = new todoList()\r\ndocument.getElementById('app').onclick = function() {\r\n    minhaLista.addData(\"Novo Todo\")\r\n    minhaLista.mostraUsuario()\r\n    console.log(Matematica.soma(2,3))\r\n}\r\n*/\n\n/* Arrays \r\nconst arr = [1,2,3,4,8,9]\r\nconst newArr = arr.map(function(item,index) {\r\n    return item * index\r\n})\r\nconsole.log(newArr)\r\n\r\nconst sum = arr.reduce(function(total, next) {\r\n    return total + next\r\n})\r\nconsole.log(sum)\r\n\r\nconst filter = arr.filter(function(item) {\r\n    return item % 2 == 0\r\n})\r\nconsole.log(filter)\r\n\r\nconst find = arr.find(function(item) {\r\n    return item == 4\r\n})\r\nconsole.log(find)\r\n*/\n\n/* Arrow functions */\nvar arr = [1, 2, 3, 4, 8, 9];\nvar newArr = arr.map(function (item) {\n  return item * 2;\n});\nconsole.log(newArr);\n\nvar test = function test() {\n  return {\n    nome: \"Vinícius\"\n  };\n};\n/*'teste' [1,2,3]*/\n\n\nconsole.log(test());\n/* Valores padrão\r\nfunction soma(a = 3,b = 6) {\r\n    return a + b\r\n}\r\n*/\n\nvar soma = function soma() {\n  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;\n  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;\n  return a + b;\n};\n\nconsole.log(soma(1, 2));\nconsole.log(soma(1));\nconsole.log(soma());\n/* Desestruturação */\n\nvar usuario = {\n  nome: 'Vinícius',\n  idade: 27,\n  endereco: {\n    cidade: 'São José do Alegre',\n    estado: 'MG'\n  }\n};\n/*\r\nconst {nome, idade, endereco: {cidade}} = usuario\r\nfunction mostraNome({nome, idade, endereco:{cidade}}) {\r\n    console.log(nome)\r\n    console.log(idade)\r\n    console.log(cidade)\r\n}\r\n\r\nmostraNome(usuario)\r\n\r\n\r\n/* Operadores rest e spread */\n//REST\n//objetos:\n\nvar nome = usuario.nome,\n    resto = _objectWithoutProperties(usuario, [\"nome\"]);\n\nconsole.log(nome);\nconsole.log(resto); //arrays:\n\nvar a = arr[0],\n    b = arr[1],\n    c = arr.slice(2);\nconsole.log(a);\nconsole.log(b);\nconsole.log(c); //funções:\n\nfunction novaSoma() {\n  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n    params[_key] = arguments[_key];\n  }\n\n  return params.reduce(function (total, next) {\n    return total + next;\n  });\n}\n\nconsole.log(novaSoma(1, 2, 3, 4567)); //SPREAD\n\nvar arr1 = [1, 2, 3];\nvar arr2 = [4, 5, 6];\nvar arr3 = [].concat(arr1, arr2);\nconsole.log(arr3);\nvar usuario1 = {\n  nome: 'Diego',\n  idade: 23,\n  time: 'Corinthians'\n};\n\nvar usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {\n  nome: 'Fernando',\n  time: 'Palmeiras'\n});\n\nconsole.log(usuario2);\nvar nomine = 'Vinícius';\nvar age = 27; //forma comum:\n\nconsole.log('Meu nome é ' + nomine + ' e tenho ' + age + ' anos'); //template literal:\n\nconsole.log(\"Meu nome \\xE9 \".concat(nomine, \" e tenho \").concat(age, \" anos\")); //Object short syntax\n\nvar usuario3 = {\n  nomine: nomine,\n  age: age,\n  idioma: 'Latim'\n};\nconsole.log(usuario3);\nconsole.log(funcoes.som(1, 2));\nconsole.log(funcoes.sub(4, 2));\nconsole.log(funcoes.mult(4, 2));\n\n//# sourceURL=webpack:///./es6.js?");

/***/ }),

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.som = som;\nexports.sub = sub;\nexports.mult = mult;\n\nfunction som(a, b) {\n  return a + b;\n}\n\nfunction sub(a, b) {\n  return a - b;\n}\n\nfunction mult(a, b) {\n  return a * b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ })

/******/ });