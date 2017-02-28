function previousLength(array1)
{
  var len=0;
  var temp=array1[0];

    for(var i=array1.length-1;i>=0;i--)
    {
        if(i==(array1.length-1))
          {
            temp=array1[i].length;
          }
          else
          {
            len=array1[i].length;
            array1[i+1]=len;            
          }
    }
    array1[0]=temp;
    console.log(array1);
}

previousLength(['Jack','Johnny','Kate','Ian']);   //[3,4,6,4]
