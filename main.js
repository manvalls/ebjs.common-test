var Test = require('vz.test'),
    ebjs = require('ebjs'),
    assert = require('assert');

module.exports = function(array,deep){
  var txt,cons;
  
  if(global.Buffer){
    txt = 'Buffer';
    cons = global.Buffer;
  }else{
    txt = 'Blob';
    cons = Blob;
  }
  
  new Test(txt,function(test){
    
    for(i = 0;i < array.length;i++) (function(i){
      
      ebjs.pack(array[i],test.wrap(function(data){
        assert(data instanceof cons);
        ebjs.unpack(data,test.wrap(function(result){
          if(deep) assert.deepEqual(result,array[i]);
          else assert.strictEqual(result,array[i]);
        }),{sync: true});
      }),{sync: true});
      
    })(i);
    
  });
  
};
