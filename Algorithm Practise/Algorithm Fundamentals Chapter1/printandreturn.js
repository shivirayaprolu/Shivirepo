function printAndreturn(numarray)
{
  console.log("First Number is "+numarray[0]);
  return numarray[1];
}

var numarray=[10,22];
console.log("Second number is "+printAndreturn(numarray));
