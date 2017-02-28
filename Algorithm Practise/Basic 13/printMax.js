function printMax(array1)
{
  var max=array1[0];
    for(var x=0;x<array1.length;x++)
    {
        if(array1[x]>max)
        {
          max=array1[x];
        }
    }
    console.log("The array values are "+array1+" and the Max  number in the array is "+max);
}

printMax([6,2,7,10,3,11,36,1])
