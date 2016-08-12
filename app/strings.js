exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var re = new RegExp("(.)(?=\\1{"+amount+"})","g");
    str = str.replace(re,"");
    return str;
  },

  wordWrap: function(str, cols) {
     var re = new RegExp("(\\ )(?=[a-z]{2,})","g");

      str = str.replace(re,"\n");

    return str;
  },

  reverseString: function(str) {
    let revStr = "";
     for(let i = 0 ; i < str.length ; i++)
     {
       revStr = str.charAt(i) + revStr;
     }
    return revStr;
  }
};
