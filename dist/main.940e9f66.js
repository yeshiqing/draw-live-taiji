// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var divCode = document.querySelector('#drawProcess');
var style = document.querySelector('#renderStyle');
var stringOrigin = '\n/*\n\u4F60\u597D\uFF0C\u6211\u662F\u4E16\u6E05\uFF0C\n\u8FD9\u662F\u6211\u7528 HTML + CSS \u4EE3\u7801\u753B\u51FA\u7684\u592A\u6781\u56FE\uFF0C\n\u7ED9\u4F60\u5C55\u793A\u4E00\u4E0B\u7ED8\u5236\u7684\u8FC7\u7A0B\u2728\n*/\n/* \n\u9996\u5148\u51C6\u5907\u4E00\u4E2A div#taiJi \n*/\n#taiJi {\n    box-shadow: 0 0 3px rgba(0, 0, 0.6);\n    width: 200px;\n    height: 200px;\n}\n\n/*\n\u63A5\u7740\uFF0C\u6211\u4EEC\u628A div \u53D8\u6210\u516B\u5366\u4E2D\u7684\u592A\u6781\u3002\n*/\n#taiJi {\n    border-radius: 50%;\n    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 49%, rgba(0, 0, 0, 1) 49%, rgba(0, 0, 0, 1) 100%);\n}\n\n/* \n\u51C6\u5907\u4E24\u4E2A\u795E\u5947\u7684\u5C0F\u7403\uFF0C\u4F5C\u4E3A\u9634\u9633\u9C7C\u7684\u773C\u775B\n */\n#taiJi::before {\n    border: 1px solid black;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 24%, rgba(0, 0, 0, 1) 26%, rgba(0, 0, 0, 1) 100%);\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n#taiJi::after {\n    border: 1px solid white;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 24%, rgba(255, 255, 255, 1) 26%, rgba(255, 255, 255, 1) 100%);\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 0%;\n}\n\n';
var n = 1;
var speed = 20;

var goNextStep = function goNextStep() {
    setTimeout(function () {
        var char = stringOrigin[n];
        style.innerHTML += char;
        if (char === '\n') {
            char = '<br>';
        } else if (char === ' ') {
            char = '&nbsp;';
        }
        divCode.innerHTML += char;
        divCode.scrollIntoView(false);
        if (n < stringOrigin.length - 1) {
            n = n + 1;
            goNextStep();
        }
    }, 1000 / speed);
};

goNextStep();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.940e9f66.map