exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
     var bitNr = (Number(num).toString(2)).toString();
    return parseInt(bitNr.charAt(bitNr.length - bit));
  },

  base10: function(str) {
           return parseInt(str,2);
  },

  convertToBinary: function(num) {
        var bitNum = num.toString(2);
          while(bitNum.length != 8 )
          {
            bitNum = "0"+bitNum;
          }
       return bitNum;
  },

  multiply: function(a, b) {
   return +(a * b).toFixed(6);
  }
};
