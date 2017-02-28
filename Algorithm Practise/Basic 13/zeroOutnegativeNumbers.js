function zeroOutnegativeNumbers(array1)
{
    for(var x=0;x<array1.length;x++)
    {
      if(array1[x]<0)
      {
        array1[x]=0;
      }
    }
  return array1;
}

console.log(zeroOutnegativeNumbers([-1,2,3,-4,-5,6,7,-8]))
