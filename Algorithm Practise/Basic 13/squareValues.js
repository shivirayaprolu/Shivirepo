function squareValues(array1)
{
  var square=0;
  console.log("The array is "+array1);
  for(var x=0;x<array1.length;x++)
  {
    square=array1[x]*array1[x];
    array1[x]=square;
  }
  console.log("The modified array is "+array1);
}

squareValues([2,3,4,5,6,7])
