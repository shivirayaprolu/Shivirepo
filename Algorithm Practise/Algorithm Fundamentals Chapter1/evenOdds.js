/*Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!"
Every time the array has three evens in a row, print "Even more so!"*/

function evenOdds(array1)
{

  for(var i=0;i<array1.length;i++)
  {
      if((array1[i]%2)==0)
      {
          if((array1[i+1]%2)==0)
          {
              if((array1[i+2]%2)==0)
              {
                console.log("Even more so!");
                break;
              }

          }
      }
      else if((array1[i]%2)==1)
      {
          if((array1[i+1]%2)==1)
          {
              if((array1[i+2]%2)==1)
              {
                console.log("That's Odd!");
                break;
              }

          }
      }
      else
      {
        console.log("None of the above 2 are satisfied");
      }
  }
}

evenOdds([1,2,3,5,9]);
