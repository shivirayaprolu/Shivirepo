function scaleTheArray(array1,num)
{
  var multiply=num;
    for(var i=0;i<array1.length;i++)
    {
      array1[i]=array1[i]*multiply;
    }
    return array1;
}

console.log(scaleTheArray([1,2,3,4,5],3))
