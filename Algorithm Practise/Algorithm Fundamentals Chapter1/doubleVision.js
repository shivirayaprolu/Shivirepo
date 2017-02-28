function doubleVision(array1)
{
    var newarray=[];
    for(var i=0;i<array1.length;i++)
    {
      newarray[i]=(array1[i]*2);
    }
    console.log(array1);
    console.log(newarray);
}

doubleVision([1,2,3]);
