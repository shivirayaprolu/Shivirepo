function betterThreesAndFives(num1,num2)
{
    var sum=0;
    for(var x=num1;x<num2;x++)
    {
        if(((x%3)==0)||((x%5)==0))
        {
              if(((x%3)==0)&&((x%5)==0))
              {

              }
              else
              {
                sum=sum+x;
              }
        }
    }
    console.log(sum);
}

betterThreesAndFives(100,4000000)
