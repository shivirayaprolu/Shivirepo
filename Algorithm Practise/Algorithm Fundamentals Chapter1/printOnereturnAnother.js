function printOnereturnAnother(array1)
{
  console.log("Second to last number in the array is "+array1[array1.length-2]);

    for(var i=0;i<array1.length;i++)
    {
        if((array1[i]%2)!==0)
        {
          console.log("The first odd number in the array is "+array1[i]);
          break;
        }
    }
}

printOnereturnAnother([1,4,5,6,7,8]);
