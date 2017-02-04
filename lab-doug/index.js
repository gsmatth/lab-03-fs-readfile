'use strict';

const fs = require('fs');
const getFileContent  = require(__dirname + '/lib/get-file-content');



fs.readdir('./doc', getFileContent);
