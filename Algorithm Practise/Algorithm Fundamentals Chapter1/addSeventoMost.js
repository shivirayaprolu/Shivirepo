function addSeventoMost(array1)
{
  newarray=[];
    for(var i=1;i<array1.length;i++)
    {
      newarray.push(array1[i]+7);
    }
    //console.log(array1);
    //console.log(newarray);
    return newarray;
}

addSeventoMost([1,2,3,4,5,6])
