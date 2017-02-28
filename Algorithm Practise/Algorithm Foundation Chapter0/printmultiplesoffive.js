function print_multiplesoffive()
{
  var num1=512;
  var count=0;
  for(i=num1;i<=4096;i++)
  {
    if(i%5==0)
    {
      console.log(i);
      count++;
    }
  }
console.log("There are "+count+" numbers which are multiples of 5");
}

print_multiplesoffive();
