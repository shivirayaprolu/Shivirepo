function whileYouwait(num1)
{
  var dayuntilyourbirthday=num1;

  while(dayuntilyourbirthday>=0)
  {
    if(dayuntilyourbirthday>30)
    {
      console.log(dayuntilyourbirthday+" days until my birthday :(");
    }
    else if((dayuntilyourbirthday<=30)&&(dayuntilyourbirthday>5))
    {
      console.log(dayuntilyourbirthday+" days until my birthday :|");
    }
    else if((dayuntilyourbirthday<=5)&&(dayuntilyourbirthday>0))
    {
      console.log(dayuntilyourbirthday+" Birthday coming soon");
    }
    else
    {
      console.log("Yahoo my birthday is here");
    }
    dayuntilyourbirthday--;
  }
}

whileYouwait(45);
