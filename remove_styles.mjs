import fs from 'fs';
import path from 'path';
import * as parser from '@babel/parser';
import traverseModule from '@babel/traverse';
import generatorModule from '@babel/generator';

const traverse = traverseModule.default || traverseModule;
const generate = generatorModule.default || generatorModule;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDir = path.resolve('src');

walkDir(targetDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    const code = fs.readFileSync(filePath, 'utf8');
    try {
      const ast = parser.parse(code, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript']
      });

      traverse(ast, {
        JSXAttribute(path) {
          if (path.node.name.name === 'className') {
            path.remove();
          }
        }
      });

      const output = generate(ast, { retainLines: true }, code);
      fs.writeFileSync(filePath, output.code, 'utf8');
      console.log(`Stripped styles from ${filePath}`);
    } catch (err) {
      console.error(`Failed to process ${filePath}: ${err.message}`);
    }
  }
});
