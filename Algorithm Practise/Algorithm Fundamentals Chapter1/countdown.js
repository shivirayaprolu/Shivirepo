function countdown(num1)
{
  var numarray=[];
  for(var i=num1;i>=0;i--)
  {
    numarray.push(i);

  }
  //console.log(numarray);
  //console.log(numarray.length);
  return numarray.length;
}

console.log(countdown(15));
