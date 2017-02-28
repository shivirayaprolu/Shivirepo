function finalCountdown(num1,num2,num3,num4)
{
  var multiples=num1;
  var lownum=num2;
  var highnum=num3;
  var except=num4;
  var i=lownum;

  while(i<=highnum)
  {
    if((i!==except) && ((i%multiples)==0))
    {
      console.log(i);
    }
    i++;
  }
}

finalCountdown(3,5,17,10);
