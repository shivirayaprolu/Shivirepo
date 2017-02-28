function flexibleCountdown(num1,num2,num3)
{
  var lownum=num1;
  var highnum=num2;
  var multiple=num3;
  var j=0;
  var numarray=[];

  for(var i=lownum;i<=highnum;i++)
  {
    if((i%multiple)==0)
    {
      numarray[j]=i;
      j++;
    }
  }
  for(var k=numarray.length;k>=0;k--)
  {
    console.log(numarray[k]);
  }

}

flexibleCountdown(2,9,3);
