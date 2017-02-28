/*Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).
Afterward, console.log each array value and return arr.*/

function incrementSecondnumber(array1)
{
    for(var i=0;i<array1.length;i+2)
    {
      /*  if((i%2)==1)
        {
          array1[i]=(array1[i]+1);
        }*/
    }
    console.log(array1);
    //return array1;
}

incrementSecondnumber([1,2,3,4,5]);
