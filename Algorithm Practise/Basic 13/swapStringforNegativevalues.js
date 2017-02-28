function swapStringforNegativevalues(array1)
{
    for(var x=0;x<array1.length;x++)
    {
        if(array1[x]<0)
        {
          array1[x]="Dojo";
        }
    }
    console.log(array1);
}

swapStringforNegativevalues([2,-3,4,-6,9,-100])
