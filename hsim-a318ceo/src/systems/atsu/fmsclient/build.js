'use strict';

const esbuild = require('esbuild');
const path = require('path');

const rootDir = path.join(__dirname, '..', '..', '..');
const outFile = '../out/lvfr-horizonsim-airbus-a318-ceo/html_ui/JS/A318HS/atsu/fmsclient.js';

const isProductionBuild = process.env.A32NX_PRODUCTION_BUILD === '1';

esbuild.build({
    absWorkingDir: __dirname,

    define: { DEBUG: 'false' },

    entryPoints: ['src/index.ts'],
    bundle: true,
    treeShaking: false,
    minify: isProductionBuild,

    outfile: path.join(rootDir, outFile),

    format: 'iife',
    globalName: 'AtsuFmsClient',

    sourcemap: isProductionBuild ? 'linked' : undefined,

    // Target approximate CoherentGT WebKit version
    target: 'safari11',
});
