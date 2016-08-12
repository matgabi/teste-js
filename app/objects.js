exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
   // Object.prototype.defineProperty(obj,'bop',{enumerable: false});
   var ownProp = [];
    for( prop in obj )
    {
      if(obj.hasOwnProperty(prop))
      ownProp.push( prop + ": " + obj[prop]);
    }
    return ownProp;
  }
};
