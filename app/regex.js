exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {

    let re = new RegExp("[0-9]+","g");
    let res = re[Symbol.match](str);
    if(res === null )
        return false;
    else
        return true;

  },

  containsRepeatingLetter: function(str) {
      let re = new RegExp("(\\D)(?=\\1{1,})","g");
      let res = re[Symbol.match](str);
    if(res === null )
      return false;
    else
      return true;
  },

  endsWithVowel: function(str) {
    let vowels = ['a','e','i','o','u'];
    let res = vowels.indexOf(str.charAt(str.length - 1).toLowerCase());

    if(res != -1)
       return true;
    else
        return false;
  },

  captureThreeNumbers: function(str) {

    let re = new RegExp("\\d{3}");
    var result = re[Symbol.match](str);
    if(result === null)
        return false;
    return result[0];
  },

  matchesPattern: function(str) {
    let re = new RegExp("\\d{3}-\\d{3}-\\d{4}","g");
    let res = re[Symbol.match](str);
    let res2 = /\d/g[Symbol.match](str);
    if(res === null)
        return false;
    else if(res2.length === 10)
        return true;
    return false;
  },

  isUSD: function(str) {
    var re = /\$\d{1,3}(,*)(\d{3},)*(\d{3})*\.*(\d{2})*/;
    str = str.replace(re, "a");
    if (str === 'a')
      return true;
    return false;
  }

};
