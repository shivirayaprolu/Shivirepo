function printLowreturnHigh(array1)
{
  var min=array1[0];
  var max=array1[0];
  for(var i=0;i<=array1.length;i++)
  {
      if(array1[i]<min)
      {
        min=array1[i];
      }
      else if(array1[i]>min)
      {
        max=array1[i];
      }
  }
  console.log("Minimum value is "+min);

  return max;
}

console.log("Maximum value is "+printLowreturnHigh([2,4,1,5,0,7]));
