function shiftValuesinanArray(array1)
{
    for(var x=1;x<array1.length;x++)
    {
      array1[x-1]=array1[x];
    }
    array1[array1.length-1]=0;
    console.log(array1);
}
shiftValuesinanArray([2,3,4,5,6,7,8])
