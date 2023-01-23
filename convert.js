const SVGFixer = require('oslllo-svg-fixer');
const fs = require('fs');

SVGFixer(`original/`, `converted`, {showProgressBar: true}).fix();