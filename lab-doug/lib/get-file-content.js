'use strict';
const fs = require('fs');
const logFileContents = require('./log-file-contents');


module.exports = function(err, files){
  var fileContents = [];
  for (var i = 0; i < files.length; i++){
    fs.readFile('./doc/' + files[i], function(err, data){
      if (err) console.error(err);
      fileContents.splice(i, 0, data);
      logFileContents(fileContents, files);
    });
  }
};
