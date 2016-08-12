exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
   return fn.apply(fn,arr);
  },

  speak: function(fn, obj) {
      return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(a){ return str+", "+a;};
  },

  makeClosures: function(arr, fn) {
         var res = [];
    for(let i = 0 ;  i < arr.length ; i++){
       res.push(function(){return fn(arr[i]);});
    }
    return res;
  },

  partial: function(fn, str1, str2) {
    let arg = [];
    for(let i = 0 ; i < arguments.length ; i++){
      arg.push(arguments[i]);
    }
    console.log(arg);

    var f = fn(str1,str2);
     f = f.replace(/\!/g,"");
    return function (a) {
      return f + a;
    }
  },

  useArguments: function() {
    let s = 0;
      for( let i = 0 ; i < arguments.length ; i++){
        s += arguments[i];
      }
    return s;
  },

  callIt: function(fn) {
    
    let res = [];
    for ( let i = 1 ; i < arguments.length ; i++ )
       res.push(arguments[i]);
   return fn.apply(fn,res);
  },

  partialUsingArguments: function(fn) {
    let arg1 = [];
    for(let i = 1 ; i < arguments.length ; i++)
    {
      arg1.push(arguments[i]);
    }

    let intermediarFn = arguments[0];

    let res = function () {
      let arg2 = [];
      for(let i = 0 ; i < arguments.length ; i++){
        arg2.push(arguments[i]);
      }
      let arg = arg1.concat(arg2)
      return intermediarFn.apply(null,arg);
    }
    return res;

  },

  curryIt: function(fn) {
    function curry(f) {
      let fPar = f.length;
      return (function resolve() {
        let memory = Array.prototype.slice.call(arguments);
        return function (a) {
          let local = memory.slice();
          Array.prototype.push.apply(local,arguments);
          let next  = local.length === fPar ? f : resolve;
          return next.apply(null,local);
        }
      })();
    }
    return curry(fn);
  }
};
