var Test = require('vz.test'),
    ebjs = require('ebjs'),
    vzBuffer = require('vz.buffer'),
    assert = require('assert'),
    
    Stream = global.process?require('st'+'ream'):null;

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
  
  new Test('ArrayBuffer',function(test){
    
    for(i = 0;i < array.length;i++) (function(i){
      
      ebjs.pack(array[i],test.wrap(function(data){
        assert(data instanceof ArrayBuffer);
        ebjs.unpack(data,test.wrap(function(result){
          if(deep) assert.deepEqual(result,array[i]);
          else assert.strictEqual(result,array[i]);
        }),{sync: true});
      }),{sync: true,type: 'arraybuffer'});
      
    })(i);
    
  });
  
  new Test('base64',function(test){
    
    for(i = 0;i < array.length;i++) (function(i){
      
      ebjs.pack(array[i],test.wrap(function(data){
        assert.strictEqual(data.constructor,String);
        ebjs.unpack(data,test.wrap(function(result){
          if(deep) assert.deepEqual(result,array[i]);
          else assert.strictEqual(result,array[i]);
        }),{sync: true});
      }),{sync: true,type: 'base64'});
      
    })(i);
    
  });
  
  new Test('dataurl',function(test){
    
    for(i = 0;i < array.length;i++) (function(i){
      
      ebjs.pack(array[i],test.wrap(function(data){
        assert.strictEqual(data.constructor,String);
        ebjs.unpack(data,test.wrap(function(result){
          if(deep) assert.deepEqual(result,array[i]);
          else assert.strictEqual(result,array[i]);
        }),{sync: true});
      }),{sync: true,type: 'dataurl'});
      
    })(i);
    
  });
  
  if(Stream) new Test('Stream',function(test){
    
    for(i = 0;i < array.length;i++) (function(i){
      
      ebjs.pack(array[i],test.wrap(function(data){
        assert(data instanceof Stream);
        ebjs.unpack(data,test.wrap(function(result){
          if(deep) assert.deepEqual(result,array[i]);
          else assert.strictEqual(result,array[i]);
        }),{sync: true});
      }),{sync: true,target: new Stream.PassThrough()});
      
    })(i);
    
  });
  
  new Test('vzBuffer sync',function(test){
    
    new Test(txt,function(test){
      
      for(i = 0;i < array.length;i++) (function(i){
        
        ebjs.pack(array[i],test.wrap(function(data){
          assert(data instanceof vzBuffer);
          
          ebjs.unpack(data,test.wrap(function(result){
            if(deep) assert.deepEqual(result,array[i]);
            else assert.strictEqual(result,array[i]);
          }),{sync: true,allowBlobs: true});
        }),{sync: true,target: new vzBuffer()});
        
      })(i);
      
    });
    
    new Test('ArrayBuffer',function(test){
      
      for(i = 0;i < array.length;i++) (function(i){
        
        ebjs.pack(array[i],test.wrap(function(data){
          assert(data instanceof vzBuffer);
          
          ebjs.unpack(data,test.wrap(function(result){
            if(deep) assert.deepEqual(result,array[i]);
            else assert.strictEqual(result,array[i]);
          }),{sync: true});
        }),{sync: true,target: new vzBuffer(),type: 'arraybuffer'});
        
      })(i);
      
    });
    
    new Test('base64',function(test){
      
      for(i = 0;i < array.length;i++) (function(i){
        
        ebjs.pack(array[i],test.wrap(function(data){
          assert(data instanceof vzBuffer);
          
          ebjs.unpack(data,test.wrap(function(result){
            if(deep) assert.deepEqual(result,array[i]);
            else assert.strictEqual(result,array[i]);
          }),{sync: true});
        }),{sync: true,target: new vzBuffer(),type: 'base64'});
        
      })(i);
      
    });
    
    new Test('dataurl',function(test){
      
      for(i = 0;i < array.length;i++) (function(i){
        
        ebjs.pack(array[i],test.wrap(function(data){
          assert(data instanceof vzBuffer);
          
          ebjs.unpack(data,test.wrap(function(result){
            if(deep) assert.deepEqual(result,array[i]);
            else assert.strictEqual(result,array[i]);
          }),{sync: true});
        }),{sync: true,target: new vzBuffer(),type: 'dataurl'});
        
      })(i);
      
    });
    
  });
  
  new Test('vzBuffer async',function(test){
    
    new Test(txt,function(test){
      
      for(i = 0;i < array.length;i++) (function(i){
        
        ebjs.pack(array[i],test.wrap(function(data){
          assert(data instanceof vzBuffer);
          
          ebjs.unpack(data,test.wrap(function(result){
            if(deep) assert.deepEqual(result,array[i]);
            else assert.strictEqual(result,array[i]);
          }),{allowBlobs: true});
        }),{target: new vzBuffer()});
        
      })(i);
      
    });
    
    new Test('ArrayBuffer',function(test){
      
      for(i = 0;i < array.length;i++) (function(i){
        
        ebjs.pack(array[i],test.wrap(function(data){
          assert(data instanceof vzBuffer);
          
          ebjs.unpack(data,test.wrap(function(result){
            if(deep) assert.deepEqual(result,array[i]);
            else assert.strictEqual(result,array[i]);
          }));
        }),{target: new vzBuffer(),type: 'arraybuffer'});
        
      })(i);
      
    });
    
    new Test('base64',function(test){
      
      for(i = 0;i < array.length;i++) (function(i){
        
        ebjs.pack(array[i],test.wrap(function(data){
          assert(data instanceof vzBuffer);
          
          ebjs.unpack(data,test.wrap(function(result){
            if(deep) assert.deepEqual(result,array[i]);
            else assert.strictEqual(result,array[i]);
          }));
        }),{target: new vzBuffer(),type: 'base64'});
        
      })(i);
      
    });
    
    new Test('dataurl',function(test){
      
      for(i = 0;i < array.length;i++) (function(i){
        
        ebjs.pack(array[i],test.wrap(function(data){
          assert(data instanceof vzBuffer);
          
          ebjs.unpack(data,test.wrap(function(result){
            if(deep) assert.deepEqual(result,array[i]);
            else assert.strictEqual(result,array[i]);
          }));
        }),{target: new vzBuffer(),type: 'dataurl'});
        
      })(i);
      
    });
    
  });
  
};
