function maxMinAvg(array1)
{
    var max=0;var min=array1[0];var sum=0;
    for(var x=0;x<array1.length;x++)
    {
      if(array1[x]>max)
      {
        max=array1[x];
      }

      if(array1[x]<min)
      {
        min=array1[x];
      }
      sum=sum+array1[x];
    }
    console.log("The Maximum value in the array is "+max);
    console.log("The Minimum value in the array is "+min);
    console.log("The Average value of the numbers in array is "+sum/array1.length);
}

maxMinAvg([2,3,4,5,6,7,8])
