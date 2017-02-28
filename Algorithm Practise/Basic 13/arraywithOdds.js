function arraywithOdds()
{
    var array1=[];
    var i=0;
    for(var x=0;x<=255;x++)
    {
        if((x%2)!==0)
        {
          array1[i]=x;
          i++;
        }
        //console.log(array1);
    }
    console.log(array1);
}

arraywithOdds()
