function negativeOutlook(array1)
{
  var newarray=[];
    for(var i=0;i<array1.length;i++)
    {
          if(array1[i]>0)
          {
              newarray[i]=array1[i]*-1;
          }
          else
          {
            newarray[i]=array1[i];
          }
    }
    console.log(array1);
    console.log(newarray);
}

negativeOutlook([2,-3,-4,5,6,-7,-8])
