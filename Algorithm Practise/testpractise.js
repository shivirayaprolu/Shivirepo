function print255()
{
  for(var i=0;i<=255;i++)
  {
    console.log(i);
  }
}


function printIntsum()
{
 var sum=0;
  for(var i=0;i<=255;i++)
  {
    sum=sum+i;
  }
  console.log("Total sum is "+sum);
}

function printMax(array1)  //[1,2,3,4,5]   [3.7.20.25.6]
{
  var max=array1[0];
  for (var i=0;i<=array1.length;i++)
  {
    if(array1[i]>max)
    {
      max=array1[i];
    }
  }
  console.log("The maximum number in the array is "+max);
}

function arrayOdd()
{
var array1=[];
  for(var i=0;i<=255;i++)
  {
    if((i%2)!==0)
    {
      array1.push(i);
    }
  }
}

function greaterThanY(array1,num2)
{
var count=0;
  for(var i=0;i<=array1.length;i=+)
  {
    if (array1[i]>num2)
    {
      count++;
      console.log(array1[i]);
    }
  }
  console.log("Total count is "+count);
}

function maxMinavg(array1)
{
  var max=array1[0];
  var min=array1[0];
  var total=0;

  for(var i=0;i<=array1.length;i++)
  {
    if((array1[i])>max)
    {
      max=array1[i];
    }
    if((array1[i])<min)
    {
      min=array1[i];
    }
    total=total+array1[i];
  }
  var avg=total/array.length;
  console.log("Max value is "+max);
  console.log("Min value is "+min);
  onsole.log("Average value is "+avg);
}

function swapstring(array1) //[2,-4,3,-7]
{
  for(var i=0;i<=array1.length;i++)
  {
    if(array1[i]<0)
    {
      array1[i]="Dojo";
    }
  }
}
