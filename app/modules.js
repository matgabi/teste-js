exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
   var myModule = (function(str1,str2){
         var name = str2;
         var greeting = str1;
         var sayIt = function(){
           return this.greeting + ", "+this.name;
         }

         return{
           name : name,
           greeting : greeting,
           sayIt : sayIt
         };
       }


   )(str1,str2);

    return myModule;
  }
};
