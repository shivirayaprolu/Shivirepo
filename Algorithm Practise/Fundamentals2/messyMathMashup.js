function messyMathMashup(num)
{
    var sum=0;
    for(var x=0;x<num;x++)
    {
        if((x%3)!==0)
        {
          continue;
          //sum=sum+x
          console.log("first if");
        }
        else if((x%7)==0)
        {
          sum=sum+(x*2);
          console.log("second if");
        }
        else if((x%3)==0)
        {
          console.log("third if");
          return -1;
        }
        //sum=sum+x;
    }
    return sum;
    //console.log(sum);
}

console.log(messyMathMashup(4))
