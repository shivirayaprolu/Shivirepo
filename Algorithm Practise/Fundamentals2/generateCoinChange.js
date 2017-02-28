function generateCoinChange(num)
{
  howmanypennies(howmanynickel(howmanydimes(howmanyquarters(howmanyhalfdollars(howmanydollars(num))))))
}
function howmanydollars(num)
{
  var dollarcount=Math.floor(num/100);
  var change=num-(100*dollarcount);
  console.log("Number of Dollars are "+dollarcount);
  return change;
}
function howmanyhalfdollars(num)
{
  var halfdollarcount=Math.floor(num/50);
  var change=num-(50*halfdollarcount);
  console.log("Number of HalfDollars are "+halfdollarcount);
  return change;
}
function howmanyquarters(num)
{
  var quartcount=Math.floor(num/25);
  var change=num-(25*quartcount);
  console.log("Number of Quarters are "+quartcount);
  return change;
}

function howmanydimes(num)
{
  var dimecount=Math.floor(num/10);
  var change=num-(10*dimecount);
  console.log("Number of Dimes are "+dimecount);
  return change;
}

function howmanynickel(num)
{
  var nicklecount=Math.floor(num/5);
  var change=num-(5*nicklecount);
  console.log("Number of Nickles are "+nicklecount);
  return change;
}

function howmanypennies(num)
{
  console.log("Number of Pennies are "+num);
}

generateCoinChange(94)
