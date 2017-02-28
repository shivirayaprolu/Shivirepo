function countingDojoway()
{
  var i=1;
  while(i<=100)
  {
    if(((i%5)==0) && ((i%10)!=0))
    {
      console.log(i+" Coding");
    }
    else if ((i%10)==0)
    {
      console.log(i+" Dojo");
    }
    i++;
  }
}

countingDojoway();
