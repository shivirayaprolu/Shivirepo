function countPositives(array1)
{
  var count=0;
  for(var i=0;i<array1.length;i++)
    {
        if(array1[i]>0)
        {
            if(i!==array1.length-1)
            {
            count++;
            }
            else
            {
              count++;
              array1[i]=count;
            }
        }
        else
        {
          if(i==array1.length-1)
          {
            array1[i]=count;
          }

        }
    }
    console.log(array1);
}

countPositives([-1,-1,-1,-1,-1]);
