exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
         var promise = new Promise(function (resolve,reject) {
           if(value !== false)
               resolve(value);
           else
               reject("NOT COOL MAN!!!!");
         });
    promise.then(function (val) {console.log(val);}).catch(function(val){console.log(val);});
    return promise;

  },

  manipulateRemoteData: function(url) {
    let req ,people;
    let promise = new Promise(function (resolve,reject) {
      req = new XMLHttpRequest();
      req.open("GET",url,true);
      req.onload = function () {
        if(req.status == 200){
          let people = JSON.parse(req.responseText);

          people = people.people.map(function (Obj) {
            return Obj.name;
          });
          people.sort();
          resolve(people);
        }else{
          reject("NOT COOL MAN!!!");
        }
      };
      req.send();
    });

    return promise;
  }
};
