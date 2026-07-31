import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Remove className="..."
    content = content.replace(/className="[^"]*"/g, '');
    content = content.replace(/className='[^']*'/g, '');
    content = content.replace(/className={`[^`]*`}/g, '');
    
    // Remove className={...}
    let out = '';
    let i = 0;
    while (i < content.length) {
        const substr = content.substring(i);
        if (substr.startsWith('className={')) {
            let braceCount = 0;
            let j = i + 10; // index of {
            while (j < content.length) {
                if (content[j] === '{') braceCount++;
                else if (content[j] === '}') {
                    braceCount--;
                    if (braceCount === 0) {
                        j++;
                        break;
                    }
                }
                j++;
            }
            i = j; // skip over the className={...}
        } else {
            out += content[i];
            i++;
        }
    }
    
    fs.writeFileSync(file, out);
});
console.log('Styles stripped from all files.');
