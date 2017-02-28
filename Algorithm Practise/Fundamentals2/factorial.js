function factorial(num)
{
  var sum=1;
    for(x=1;x<=num;x++)
    {
      sum=sum*x;
    }
    console.log("Factorial("+num+") is "+sum);
}

factorial(3)
