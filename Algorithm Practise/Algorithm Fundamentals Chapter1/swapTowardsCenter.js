function swapTowardsCenter(array1)
{
  var pointer1=0;
  var pointer2=array1.length-1;
  var temp;

    for(var i=0;i<array1.length;i++)
    {
        if((pointer1==0)||(pointer1==2))
        {
          temp=array1[pointer1];
          array1[pointer1]=array1[pointer2];
          array1[pointer2]=temp;
        }
        pointer1++;
        pointer2--;
    }
    console.log(array1);
}

swapTowardsCenter([1,2,3,4,5,6])
