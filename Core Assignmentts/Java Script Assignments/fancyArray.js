function fancyArray(array1)
{
  var symbol=array1[4];
  var reversed=array1[5];
  if(reversed===true)
  {
    for(var i=array1.length-3;i>=0;i--)
    {
      console.log(i+symbol+array1[i]);
    }
  }
  else
  {
    for(var i=0;i<=array1.length-3;i++)
    {
      console.log(i+symbol+array1[i]);
    }
  }
}
var array1=['Jack','Jill','Jane','John','-->',false];
fancyArray(array1);
