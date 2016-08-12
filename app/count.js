exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

    let countControl;
    (function counter() {
      console.log(start++);
      if(start <= end)
          countControl=setTimeout(counter,100);
    })();
   return{
     cancel: function () {
       clearTimeout(countControl);
     }
   }
  }
};
