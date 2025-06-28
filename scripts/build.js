const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  outfile: 'dist/bundle.js',
  platform: 'browser',
  loader: { '.png': 'file' },
  jsx: 'automatic'
}).catch(() => process.exit(1));
