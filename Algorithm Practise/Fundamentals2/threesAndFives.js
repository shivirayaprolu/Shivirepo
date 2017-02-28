function threesAndFives()
{
    var sum=0;
    for(var x=100;x<4000000;x++)
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

threesAndFives()
