function findLeapyear(input1)
{
  var year=input1;
  if((((year%4)==0) || ((year%400)==0)) && ((year%100)!==0))
  {
    console.log("Year "+year+" is a Leapyear");
  }
  else
  {
    console.log("Year "+year+" is not a Leapyear");
  }
}

//findLeapyear(2015);
//findLeapyear(2016);
//findLeapyear(100);
findLeapyear(400);
