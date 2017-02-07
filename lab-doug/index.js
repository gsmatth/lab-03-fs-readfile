'use strict';

const fs = require('fs');
const getFileContent  = require('./lib/get-file-content');



fs.readdir('./doc', getFileContent);
