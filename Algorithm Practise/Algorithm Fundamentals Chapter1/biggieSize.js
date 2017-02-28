function biggieSize(array1)
{
  for(var i=0;i<=array1.length;i++)
  {
    if(array1[i]>0)
    {
      array1[i]="big";
    }
  }
  console.log(array1);
}

biggieSize([-1,3,5,-5]);
