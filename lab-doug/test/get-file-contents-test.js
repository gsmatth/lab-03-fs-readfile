'use strict';

const expect = require('chai').expect;
const getFileContent =  require('../lib/get-file-content');

describe('get-file-contents module, ', function(){
  describe('with valid files array passed as argument.', function(){
    it('should store 4, 8 byte strings in order', function(done){
      const files = ['text1.txt','text2.txt', 'text3.txt', 'text4.txt' ];
      getFileContent(null, files);
      //not working as expected.  need to research a bit
      expect(fileContents[0]).to.equal('313233343536373');
      done();
      // expect(fileContents[1]).to.equal('3261616262636364');
      // expect(fileContents[2]).to.equal('3371717177777765');
      // expect(fileContents[3]).to.equal('3431313131323232');

    });

  });
});
