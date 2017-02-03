'use strict';

module.exports = function (fileContents, files){
  if(fileContents.length >= files.length){
    for(var ii = 0; ii < fileContents.length; ii++){
      console.log('contents of file' + (ii + 1)  + ': ', fileContents[ii].toString('hex', 0, 8));
    }
  }
};
