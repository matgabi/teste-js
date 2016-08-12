exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(let i = 0 ; i < arr.length ; i++)
      if(arr[i] === item)
          return i;
    return -1;
  },

  sum: function(arr) {
    let s = 0;
    for(let i = 0 ; i < arr.length ; i++)
        s+=arr[i];
    return s;
  },

  remove: function(arr, item) {
    var poz = arr.indexOf(item);
    while(poz > -1)
    {
      arr.splice(poz,1);
      poz = arr.indexOf(item);
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    var poz = arr.indexOf(item);
    while(poz > -1)
    {
      arr.splice(poz,1);
      poz = arr.indexOf(item);
    }
    return arr;
  },

  append: function(arr, item) {
     arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {
   arr.splice(arr.length-1,1);
    return arr;
  },

  prepend: function(arr, item) {
      arr.splice(0,0,item);
      return arr;
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;

  },

  concat: function(arr1, arr2) {
      arr1 = arr1.concat(arr2);
    return arr1;
  },

  insert: function(arr, item, index) {
        arr.splice(index,0,item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    let l = arr.length;
    for (let i = 0; i < l; i++)
    if(arr[i] === item)
        count++;
    return count;

  },

  duplicates: function(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++)
    {
      let ok = false;
      for(let j = i+1 ; j < arr.length; j++)
            if(arr[i] === arr[j] && arr[i] != undefined)
            {
              ok = true;
              delete arr[j];
            }
      if(ok === true)
          duplicates.push(arr[i]);
    }
    return duplicates;
  },

  square: function(arr) {
    for(let i = 0 ; i < arr.length ; i++)
    arr[i] = Math.pow(arr[i],2);
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    let arrOccurrences = [];
    for (let i = 0; i < arr.length; i++)
        if(arr[i] === target)
            arrOccurrences.push(i);

    return arrOccurrences;
  }
};
