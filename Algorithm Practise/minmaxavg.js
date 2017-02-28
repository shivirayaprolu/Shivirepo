function maxMinavg(array1) //[1,2,3,4,5]
{
  var max=array1[0];
  var min=array1[0];
  var total=0;

  for(var i=0;i<array1.length;i++)
  {
    console.log("Max value in a for loop"+max);
    console.log("Min value in a for loop "+min);
    console.log("total is in loop" +total);
    if((array1[i])>max)
    {
      max=array1[i];
      console.log("This is a max in a loop "+max);
    }
    if((array1[i])<min)
    {
      min=array1[i];
      console.log("This is a min in a loop "+min);
    }
    total=total+array1[i];
    console.log(total);
  }
  var avg=(total/array1.length);
  //console.log("Max value is "+max);
  //console.log("Min value is "+min);
  //console.log("Average value is "+avg);
  //console.log(total);
}

maxMinavg([1,2,3,4,5]);
