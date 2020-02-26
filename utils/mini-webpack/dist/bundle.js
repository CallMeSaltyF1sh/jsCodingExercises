(function(graph){
        function require(module) {
            function requireInnerModule(path) {
                return require(graph[module].dependencies[path]);
            }
            var exports = {};
            (function(require, exports, code){
                eval(code);
            })(requireInnerModule, exports, graph[module].code);
            return exports;
        }
        require('./src/index.js');
    })({"./src/index.js":{"dependencies":{"./module.js":"./src\\module.js"},"code":"\"use strict\";\n\nvar _module = _interopRequireDefault(require(\"./module.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _module[\"default\"])('lalala');"},"./src\\module.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = TestModule;\n\nfunction TestModule(test) {\n  console.log(test);\n}"}})