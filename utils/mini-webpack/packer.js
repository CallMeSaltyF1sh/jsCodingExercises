const path = require('path');
const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const transformFromAst = require('@babel/core').transformFromAst;
const { join } = path;

const getInfoFromFile = file => { 
    const content = fs.readFileSync(file, 'utf-8');
    const ast = parser.parse(content, {
        sourceType: 'module'
    });
    const dependencies = {};
    traverse(ast, {
        ImportDeclaration: ({ node }) => {
            const dirname = path.dirname(file);
            const filepath = './' + join(dirname, node.source.value);
            dependencies[node.source.value] = filepath;
        }
    });
    const { code } = transformFromAst(ast, null, {
        presets: ['@babel/preset-env'],
    });
    return {
        file,
        dependencies,
        code
    }
};

const generateGraph = entry => {
    const modules = [];
    modules.push(getInfoFromFile(entry));
    modules.forEach(({ dependencies }) => {
        for(const dependency in dependencies) {
            modules.push(getInfoFromFile(dependencies[dependency]));
        }
    });
    return modules.reduce((result, curr) => ({
        ...result,
        [curr.file]: {
            dependencies: curr.dependencies,
            code: curr.code
        }
    }), {});
};

const bundle = (opts, graph) => {
    const { entry, output } = opts;
    const { filename, path } = output;
    const result = `(function(graph){
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
        require('${entry}');
    })(${JSON.stringify(graph)})`
    fs.writeFileSync(join(path, filename), result, 'utf-8');
};

export default function Packer(opts) {
    const { entry } = opts;
    const graph = generateGraph(entry);
    bundle(opts, graph);
}