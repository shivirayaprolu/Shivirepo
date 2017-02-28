function countdownbyFours()
{
  var i=2016;
  while(i>0)
  {
    if((i%4)==0)
    {
      console.log(i);
    }
    i=i-4;
  }
}

countdownbyFours();
