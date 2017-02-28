function valueGreaterthansecond(numarray)
{
  var comparenum=numarray[1];
  for(var i=0;i<=numarray.length;i++)
  {
    if(numarray[i]>comparenum)
    {
      console.log(numarray[i]);
    }
  }
}

var array1=[1,5,7,9,13];
valueGreaterthansecond(array1);
