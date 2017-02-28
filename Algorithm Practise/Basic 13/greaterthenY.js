function greaterthenY(array1,num)
{
  var count=0;
    for(var x=0;x<array1.length;x++)
    {
        if(array1[x]>num)
        {
          count++;
          console.log(array1[x]);
        }
    }
    console.log("The total number of array items which are greater then "+num+" is "+count);
}

greaterthenY([2,3,4,5,7,8,],6)
