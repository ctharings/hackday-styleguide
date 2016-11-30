'use strict';

// Gulp tasks are broken out and defined in the ./gulp/tasks folder,
// and are loaded at runtime by the ./gulp/tasks.js loader.

require('./gulp/styleguide')(require('gulp'));
