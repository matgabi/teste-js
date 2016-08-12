exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data,dirName){

    let result = [];

    function dirParc(dir) {
      if (dir instanceof Object) {
        for (let prop in dir) {
          if (dir[prop] instanceof Object)
            dirParc(dir[prop]);
          else {
            if (prop != "dir")
              result.push(dir[prop]);
          }
        }
      }
    }
    function subDirParc(dir,isGood){
      if(dir instanceof Object){
        for( let prop in dir){
          if(dir[prop] === dirName){
            isGood = true;
          }
          if(dir[prop] instanceof Object){
            subDirParc(dir[prop],isGood);
          }
          else if(prop != "dir" && isGood){
            result.push(dir[prop]);
          }
        }
      }
    }
    if(arguments.length === 1) {
      dirParc(data);
      return result;
    }
    else {
      subDirParc(data,false);
      return result;
    }

  },



  permute: function(arr) {
     var perm = [];
     var p = [0,0,0,0];
    createPerm(0);

    function valid(poz){
      for(let i = 0; i < poz ; i++)
      {
        if(p[i] === p[poz])
            return false;
      }
      return true;
    }

    function createPerm(poz)
    {
      for(let i = 0 ; i < arr.length ; i++)
      {
        p[poz] = arr[i];
        if(valid(poz))
        {
          if(poz === arr.length -1)
          {
            perm.push([p[0],p[1],p[2],p[3]]);
          }
          else
              createPerm(poz + 1);
        }

      }
    }
    return perm;
  },

  fibonacci: function(n) {


      let fib =[];
      fib.push(1);
      fib.push(1);
      let k1=0, k2 = 1;
      while(k2 != n - 1 )
      {
        fib.push(fib[k1++] + fib[k2++])
      }
      return fib[n-1];

  },

  validParentheses: function(n) {
    let par = ['(',')'];
    let parVector = new Array(2 * n);
    let result = [];

    function valid(){
      let contor = 0 ;
      for ( let i = 0 ; i < parVector.length; i++)
      {
        if ( parVector[i] === '(')
          contor ++;
        else
          contor --;
        if (contor < 0 )
          return false;
      }
      return contor === 0;
    }

    function createPar(pos){
      for(let i = 0 ; i < par.length ; i++)
      {
        parVector[pos] = par[i];
        if( pos === (2 * n ) - 1)
        {
          if(valid())
          {
            result.push(parVector.toString().replace(/,/g,""));
          }
        }
        else
        {
          createPar(pos + 1);
        }

      }
    }
    createPar(0);
    return result;

  }
};
