function addOddnumbers()
{
  var sum=0;
  for(var i=-300000;i<=300000;i++)
  {
    if((i%2)==1)
    {
      sum=sum+i;
    }
  }
  console.log("Total sum of odd numbers between -300,000 to 300,000 is "+sum);
}

addOddnumbers();
