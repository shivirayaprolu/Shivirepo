function swap(array1)
{  
  var j=array1.length-1;
  var mid=0;
  var temp=0;
  if((array1.length%2)==0)
  {
    mid=Math.floor(array1.length/2);
  }
  else
  {
    mid=Math.ceil(array1.length/2);
  }
  for( var x=0;x<mid;x++)
  {
    temp=array1[x];
    array1[x]=array1[j];
    array1[j]=temp;
    j--;
  }

console.log(array1);

}

swap([-5,2,3,-1]);
