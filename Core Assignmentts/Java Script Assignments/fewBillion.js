function fewBillion()
{
  var totalmoney=.01;
  var numofdaysfortenthousand=0;

  for(var i=1;i<=30;i++)
  {
    if(((totalmoney/100)>10000)&&((totalmoney/100)<20000))
    {
      numofdaysfortenthousand=i;
    }
    totalmoney=totalmoney*2;
    //Sconsole.log(totalmoney/100);
  }
  console.log("Total money king needs to pay is $"+totalmoney/100);
  console.log("It took "+numofdaysfortenthousand+"days to make $10,000");
}

fewBillion();
