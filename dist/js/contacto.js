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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/contacto.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/contacto.js":
/*!****************************!*\
  !*** ./src/js/contacto.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function requerido(input) {\n  // let elemento = document.getElementById(\"nombre\");\n  if (input.value != \"\") {\n    //   el input tiene texto\n    input.className = \"form-control is-valid\";\n    return true;\n  } else {\n    // el input este vacio\n    input.className = \"form-control is-invalid\";\n    return false;\n  }\n} // // validar email\n\n\nfunction revisarEmail(input) {\n  // juandami1982@gmail.com para validar\n  var expresion = /\\w+@\\w+\\.[a-z]/;\n\n  if (input.value != \"\" && expresion.test(input.value)) {\n    input.className = \"form-control is-valid\";\n    return true;\n  } else {\n    input.className = \"form-control is-invalid\";\n    return false;\n  }\n}\n\nfunction revisarConsulta(consulta) {\n  if (consulta.value.length >= 10) {\n    consulta.className = \"form-control is-valid\";\n    return true;\n  } else {\n    consulta.className = \"form-control is-invalid\";\n    return false;\n  }\n} // // agregar un evento a un objeto html\n\n\nvar checkTerminos = document.getElementById('terminos'); // agregar evento\n\ncheckTerminos.addEventListener('change', revisarTerminos);\n\nfunction revisarTerminos() {\n  if (checkTerminos.checked) {\n    checkTerminos.className = \"form-check-input is-valid\";\n    return true;\n  } else {\n    checkTerminos.className = \"form-check-input is-invalid\";\n    return false;\n  }\n} // // boton enviar\n\n\nfunction validarGeneral(event) {\n  event.preventDefault();\n  console.log('Desde la funcion validar general' + event);\n\n  if (requerido(document.getElementById('nombre')) && revisarEmail(document.getElementById('email')) && revisarConsulta(document.getElementById('consulta')) && revisarTerminos()) {\n    enviarEmail();\n    alert(\"El formulario esta listo para ser enviado\");\n  } else {\n    document.getElementById('msjEnvio').className = 'alert alert-danger  bg-danger  my-3';\n    document.getElementById('msjEnvio').innerText = 'ocurrio un error';\n  }\n}\n\nfunction enviarEmail() {\n  var template_params = {\n    from_name: document.getElementById('nombre').value,\n    to_name: \"juan damichici\",\n    message_html: \"('email').value} - \".concat(document.getElementById('consulta').value)\n  };\n  var service_id = \"default_service\";\n  var template_id = \"template_iT1uMq0N\";\n  emailjs.send(service_id, template_id, template_params).then(function (response) {\n    // esto se ejecuta si se envio correctamente el mail\n    console.log(response);\n    document.getElementById('msjEnvio').className = 'alert alert-primary my-3';\n    document.getElementById('msjEnvio').innerText = 'su consulta fue enviada.';\n  }, function (error) {\n    console.log(\"error\", error);\n    document.getElementById('msjEnvio').className = 'alert alert-danger my-3';\n    document.getElementById('msjEnvio').innerText = 'A ocurrido un error en el envio.';\n  });\n}\n\n//# sourceURL=webpack:///./src/js/contacto.js?");

/***/ })

/******/ });