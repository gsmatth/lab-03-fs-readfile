'use';

const fs = require('fs');
const getFileContent  = require(__dirname + '/lib/getFileContent');



fs.readdir('./doc', getFileContent);
