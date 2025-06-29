const fs = require('fs');
const path = require('path');

function processFile(file) {
  let data = fs.readFileSync(file, 'utf8');
  data = data.replace(/from '(\.\.?[^']*)'/g, (match, p1) => {
    if (p1.startsWith('.')) {
      if (!p1.endsWith('.js')) return `from '${p1}.js'`;
    }
    return match;
  });
  fs.writeFileSync(file, data, 'utf8');
}

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith('.js')) processFile(full);
  }
}

walk(path.join(__dirname, '..', 'dist'));
