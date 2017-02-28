function thisLengththatValue(array1, array2)
{
  if(array1.length==array2.length)
  {
      for(var i=0;i<=array2.length;i++)
      {
        if(array1[i]==array2[i])
        {
          console.log("The Values in both the arrays are same JINX");
        }

      }
    }
    else
    {
      console.log("Sorry array lengths dont match");
    }
  }

array1=[2,3,4,5,6];
array2=[6,7,8,10]
thisLengththatValue(array1, array2);
