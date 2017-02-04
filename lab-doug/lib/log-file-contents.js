'use strict';

module.exports = function (fileContents, files){
  if(fileContents.length >= files.length){
    for(var i = 0; i < fileContents.length; i++){
      console.log('contents of file' + (i + 1)  + ': ', fileContents[i].toString('hex', 0, 8));
    }
  }
};
